import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { useTranslation } from "react-i18next";

interface OfertaModalProps {
  open: boolean;
  onClose: () => void;
}

export const OfertaModal = ({ open, onClose }: OfertaModalProps) => {
  const { t } = useTranslation();

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <DialogPrimitive.Portal>
        {/* Dark overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-[1000]" />

        {/* Centered content */}
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 max-w-lg w-[90%] max-h-[80vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg z-[1001]">
          <DialogHeader>
            <DialogTitle>{t("order.ofertaLink")}</DialogTitle>
          </DialogHeader>

          <pre className="text-sm text-muted-foreground whitespace-pre-wrap mt-4">
            {t("order.ofertaText")}
          </pre>

          <div className="mt-4 text-right">
            <button
              className="text-white bg-primary px-4 py-2 rounded"
              onClick={onClose}
            >
              {t("order.close")}
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
