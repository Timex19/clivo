import React from "react";
import { Gift, X } from "lucide-react";

export default function GiftModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-gradient-to-br from-yellow-50 via-white to-teal-50 rounded-2xl shadow-2xl max-w-sm w-full p-6 sm:p-8 relative border border-yellow-200">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-500 transition text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center justify-center text-center px-2">
          <Gift className="w-16 h-16 mb-4 text-yellow-400 drop-shadow-lg animate-bounce" />
          <h2 className="text-2xl font-bold text-teal-500 mb-2">Gift Feature Coming Soon!</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Soon you&apos;ll be able to send virtual gifts to posts you love and show appreciation to fellow users.<br />
            Stay tuned for this exciting new way to connect!
          </p>
          <button
            className="mt-4 px-6 py-2 rounded-full bg-teal-500 text-white font-bold text-lg shadow-md hover:scale-105 transition"
            onClick={() => setOpen(false)}
          >
            Got it!
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .max-w-sm {
            max-width: 95vw !important;
          }
          .p-6, .p-8 {
            padding: 1rem !important;
          }
          .w-16.h-16 {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}