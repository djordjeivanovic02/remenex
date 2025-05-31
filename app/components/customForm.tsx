"use client";
import { Label } from "@radix-ui/react-label";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { cn } from "../lib/utils";
import { sendMail } from "../mail/mail";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function CustomForm() {
  const t = useTranslations("Form");
  const tNotification = useTranslations("Notification");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allFilled = firstName && secondName && email && message;
    setBtnDisabled(!allFilled);
  }, [firstName, secondName, email, message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setBtnDisabled(true);

    const res = await sendMail({
      firstName,
      secondName,
      email,
      message,
    });

    if (res === "Success") {
      toast.success(tNotification("success"));
    } else {
      toast.error(tNotification("error"));
    }

    setLoading(false);
    setBtnDisabled(false);
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-3xl rounded-none p-4 md:rounded-2xl md:p-8 bg-black">
      <h2 className="text-neutral-400 mb-4 text-xl md:text-2xl font-bold">
        {t("title")}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        {t("description")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">{t("firstName")}</Label>
            <Input
              id="firstname"
              placeholder={t("firstNamePlaceholder")}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{t("secondName")}</Label>
            <Input
              id="lastname"
              placeholder={t("secondNamePlaceholder")}
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("email")}</Label>
          <Input
            id="email"
            placeholder={t("emailPlaceholder")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">{t("message")}</Label>
          <Textarea
            id="message"
            placeholder={t("messagePlaceholder")}
            rows={5}
            className="px-3 text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className={`${!btnDisabled ? "cursor-pointer" : ""} group/btn relative  h-10 w-full rounded-md bg-gradient-to-br font-medium flex justify-center items-center text-white bg-zinc-800 from-zinc-900 to-zinc-900 shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]`}
          type="submit"
          disabled={btnDisabled}
        >
          {!loading && t("sendMessage")}
          {loading && (
            <div className="p-1 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 w-6 h-6 aspect-square rounded-full">
              <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
            </div>
          )}

          {!btnDisabled && <BottomGradient />}
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
