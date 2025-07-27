"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Image from "next/image";
import CreditCard from "@/domains/creditCard/card/components/CreditCard";
import { mockCreditCard } from "@/domains/creditCard/card/data";
import PaymentHistory from "@/domains/creditCard/paymentHistory/components/PaymentHistory";

import SearchBooks from "@/domains/books/components/SearchBooks";

import UserData from "@/domains/user/components/Userdata";
import { mockUserData } from "@/domains/user/data";
import CreditBalance from "@/domains/creditCard/balance/components/CreditBalance";
import { mockCreditBalanceData } from "@/domains/creditCard/balance/data";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Solo redirige si cuando entra la primera vez
    if (!sessionStorage.getItem("hasRedirected")) {
      const defaultQuery = "la casa en el mar mas azul";
      router.push(`/books?q=${encodeURIComponent(defaultQuery)}`);

      sessionStorage.setItem("hasRedirected", "true");
    }
  }, []);
  return (
    <main className="p-8">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg p-10">
        <div className="grid [grid-template-columns:3fr_1fr] gap-2">
          <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold mb-4">Credit Card</h1>
            <CreditCard {...mockCreditCard} />
            <PaymentHistory />
          </div>

          <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold mb-4">Balance Detail</h1>
            <UserData {...mockUserData} />
            <CreditBalance {...mockCreditBalanceData} />
            <SearchBooks />
          </div>
        </div>
      </div>
  </main>
  );
}
