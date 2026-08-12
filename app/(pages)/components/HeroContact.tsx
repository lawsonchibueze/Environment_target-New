"use client";

import PageWrapper from "@/components/PageWrapper";
import { socialIcons } from "../constants";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

const contactEmail = "environmenttargets@yahoo.com";

const HeroContact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const subject = String(formData.get("subject") || "Website enquiry");
    const message = String(formData.get("message") || "");
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;

    setSent(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageWrapper wrap={true} className="my-12 lg:my-16">
      <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.85fr)]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              Contact EMT
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-base-color sm:text-4xl">
              Let&apos;s make the next step clear.
            </h1>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Share a little about what you are working on. Our team will direct
              your enquiry to the right person.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">
                Full name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-12 w-full border border-slate-300 bg-slate-50 px-4 text-base font-normal outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Email address
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 h-12 w-full border border-slate-300 bg-slate-50 px-4 text-base font-normal outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Phone number{" "}
                <span className="font-normal text-slate-400">(optional)</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 h-12 w-full border border-slate-300 bg-slate-50 px-4 text-base font-normal outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700">
                Subject
                <input
                  required
                  name="subject"
                  className="mt-2 h-12 w-full border border-slate-300 bg-slate-50 px-4 text-base font-normal outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
                How can we help?
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y border border-slate-300 bg-slate-50 p-4 text-base font-normal outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500">
                Submitting opens a message addressed to our team in your email
                app.
              </p>
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-base-color px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Send className="h-4 w-4" />
                Send enquiry
              </button>
            </div>
            {sent && (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-700"
              >
                <CheckCircle2 className="h-4 w-4" />
                Your email draft is ready to send.
              </p>
            )}
          </form>

          <aside className="bg-base-color p-6 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              Start a conversation
            </p>
            <div className="mt-9 space-y-7">
              <a href={`mailto:${contactEmail}`} className="group flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-white/10">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-blue-100">Email</span>
                  <span className="mt-1 block font-semibold group-hover:text-blue-200">
                    {contactEmail}
                  </span>
                </span>
              </a>
              <a href="tel:+234893909843" className="group flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-white/10">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-blue-100">Telephone</span>
                  <span className="mt-1 block font-semibold group-hover:text-blue-200">
                    +234-8038691606
                  </span>
                </span>
              </a>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-white/10">
                  <Clock3 className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-blue-100">
                    Response time
                  </span>
                  <span className="mt-1 block font-semibold">
                    We aim to respond within two working days.
                  </span>
                </span>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-white/10">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-blue-100">Serving</span>
                  <span className="mt-1 block font-semibold">
                    Nigeria and international partners.
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-8">
              <p className="text-sm font-semibold text-blue-100">
                Digital workspace
              </p>
              <a
                href="https://emt-icat.netlify.app/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between border border-white/30 bg-white/10 p-4 transition hover:border-white hover:bg-white/20"
              >
                <span>
                  <span className="block font-semibold">EMT-ICAT-APP</span>
                  <span className="mt-1 block text-sm text-blue-100">
                    Open the EMT ICAT application
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </a>
            </div>
            <div className="mt-9 flex gap-3 border-t border-white/20 pt-7">
              {socialIcons.map((Icon, index) => (
                <a
                  href="#"
                  aria-label="Visit EMT on social media"
                  className="flex h-10 w-10 items-center justify-center border border-white/25 transition hover:bg-white hover:text-base-color"
                  key={index}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HeroContact;
