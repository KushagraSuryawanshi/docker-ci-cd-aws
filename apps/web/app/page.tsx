import { connection } from "next/server";

export default async function Home() {
  await connection();
  const { prisma } = await import("@repo/db");
  const users = await prisma.user.findMany();

  return (
    <main className="page-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <section className="dashboard">
        <header className="hero">
          <div>
            <span className="eyebrow">Next.js dashboard</span>
            <h1>User directory</h1>
            <p>
              A live overview of the users currently stored in your database.
            </p>
          </div>

          <div className="user-count">
            <strong>{users.length}</strong>
            <span>{users.length === 1 ? "user" : "users"}</span>
          </div>
        </header>

        <div className="data-card">
          <div className="card-heading">
            <div>
              <span className="status-dot" />
              Database response
            </div>
            <span className="record-label">{users.length} records</span>
          </div>

          <pre>
            <code>{JSON.stringify(users, null, 2)}</code>
          </pre>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .page-shell {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 72px 24px;
          color: #e8ecff;
          background:
            linear-gradient(135deg, rgba(76, 29, 149, 0.2), transparent 45%),
            #080b16;
          font-family: Arial, Helvetica, sans-serif;
        }

        .glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          filter: blur(100px);
          opacity: 0.3;
          pointer-events: none;
        }

        .glow-one {
          top: -140px;
          left: -80px;
          background: #8b5cf6;
        }

        .glow-two {
          right: -100px;
          bottom: -160px;
          background: #06b6d4;
        }

        .dashboard {
          position: relative;
          z-index: 1;
          width: min(960px, 100%);
          margin: 0 auto;
        }

        .hero {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 36px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          color: #a78bfa;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(40px, 7vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .hero p {
          max-width: 540px;
          margin: 20px 0 0;
          color: #9ca3b7;
          font-size: 17px;
          line-height: 1.65;
        }

        .user-count {
          display: flex;
          min-width: 130px;
          flex-direction: column;
          align-items: flex-end;
          padding: 20px 24px;
          border: 1px solid rgba(167, 139, 250, 0.25);
          border-radius: 20px;
          background: rgba(19, 23, 42, 0.7);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(16px);
        }

        .user-count strong {
          color: #c4b5fd;
          font-size: 36px;
          line-height: 1;
        }

        .user-count span {
          margin-top: 8px;
          color: #8f98ad;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .data-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 24px;
          background: rgba(15, 18, 34, 0.82);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(20px);
        }

        .card-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: #d7dcf0;
          font-size: 14px;
          font-weight: 600;
        }

        .card-heading > div {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 12px #34d399;
        }

        .record-label {
          padding: 6px 10px;
          border-radius: 999px;
          color: #9ca3b7;
          background: rgba(255, 255, 255, 0.06);
          font-size: 12px;
          font-weight: 500;
        }

        pre {
          max-height: 480px;
          margin: 0;
          overflow: auto;
          padding: 26px;
          color: #a5f3fc;
          font-size: 14px;
          line-height: 1.75;
          tab-size: 2;
        }

        pre::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        pre::-webkit-scrollbar-thumb {
          border: 3px solid transparent;
          border-radius: 999px;
          background: #3c4260;
          background-clip: padding-box;
        }

        @media (max-width: 640px) {
          .page-shell {
            padding: 48px 18px;
          }

          .hero {
            align-items: stretch;
            flex-direction: column;
          }

          .user-count {
            align-items: flex-start;
          }

          .card-heading {
            padding: 16px;
          }

          pre {
            padding: 20px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
