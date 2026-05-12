import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PaperPanel } from "../ui/PaperPanel";

type ConsequenceCardProps = {
  oralPrompt: string;
  text: string;
};

export function ConsequenceCard({ oralPrompt, text }: ConsequenceCardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PaperPanel className="max-w-4xl border-honey/70 bg-[#fff4d8]">
        <div className="mb-3 flex items-center gap-3 text-ember">
          <Sparkles size={34} />
          <p className="text-xl font-bold uppercase tracking-[0.14em]">
            Conséquence
          </p>
        </div>
        <p className="text-3xl font-bold leading-snug sm:text-4xl">{text}</p>
        <div className="mt-5 rounded-md bg-white/60 p-4">
          <p className="text-lg font-bold uppercase tracking-[0.12em] text-moss">
            Réponse orale
          </p>
          <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
            {oralPrompt}
          </p>
        </div>
      </PaperPanel>
    </motion.div>
  );
}
