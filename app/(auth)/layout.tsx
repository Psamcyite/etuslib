import { ReactNode } from "react";
import Image from "next/image";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");

  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/assets/images/EtusLib-logo.png" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">EtusLib</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="relative flex-1">
      <img
        src="/assets/images/gif/reverse.gif"
        alt="reverse gif"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        width={500}
        height={500}
      />

      </section>
    </main>
  );
};

export default Layout;
