import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useCreateOrder } from "@/hooks/api/useOrder";
import { OfertaModal } from "./ofertaModa";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const formSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email(),
  address: z.string().min(5),
  notes: z.string().optional(),
  oferta: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

export const OrderModal = ({ open, onOpenChange }: OrderModalProps) => {
  const { t } = useTranslation();
  const { clearCart, getTotalPrice, cartItems } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [showOferta, setShowOferta] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: "", phone: "", email: "", address: "" },
  });

  const createOrder = useCreateOrder();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = {
      fullName: values.fullName,
      phone: values.phone,
      address: values.address,
      email: values.email,
      oferta: values.oferta,
      totalPrice: Math.round(getTotalPrice()),
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    createOrder.mutate(payload, {
      onSuccess: () => {
        setIsSuccess(true);
        clearCart();
        toast.success(t("order.success"));
        setTimeout(() => {
          onOpenChange(false);
          setIsSuccess(false);
          form.reset();
        }, 3000);
      },
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t("order.title")}</DialogTitle>
          </DialogHeader>

          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="mb-4 text-6xl">✓</div>
              <p className="text-lg font-semibold text-primary">
                {t("order.success")}
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("order.fullName")}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("order.phone")}</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("order.email")}</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("order.address")}</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={2} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="font-semibold">{t("cart.total")}:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                <FormField
                  control={form.control}
                  name="oferta"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                          className="mt-1 h-4 w-4"
                        />
                      </FormControl>
                      <FormLabel className="text-sm cursor-pointer">
                        {t("order.acceptOferta")}{" "}
                        <button
                          type="button"
                          className="text-primary underline"
                          onClick={() => setShowOferta(true)}
                        >
                          {t("order.ofertaLink")}
                        </button>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <OfertaModal
                  open={showOferta}
                  onClose={() => setShowOferta(false)}
                />

                <Button type="submit" className="w-full">
                  {t("order.submit")}
                </Button>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>

      {/* Oferta Modal */}
      <OfertaModal open={showOferta} onClose={() => setShowOferta(false)} />
    </>
  );
};
