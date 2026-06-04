import { useEffect, useMemo, useState } from "react";
import { products, categories, formatIDR, type Product } from "./data/products";
import { ProductLogo } from "./components/ProductLogo";
import {
  IconSearch,
  IconCart,
  IconHistory,
  IconBolt,
  IconShield,
  IconClose,
  IconCheck,
  IconClock,
  IconHeadset,
  IconRocket,
  IconRefresh,
  IconFire,
  CategoryIcon,
  IconStar,
  IconUser,
} from "./components/Icons";

type OrderItem = {
  id: string;
  productId: string;
  productName: string;
  productIcon: string;
  email: string;
  whatsapp: string;
  method: string;
  price: number;
  status: "success" | "pending";
  date: string;
  account?: { email: string; password: string };
};

const PAYMENT_METHODS = [
  { id: "dana", label: "DANA", short: "D", color: "#118eea" },
  { id: "ovo", label: "OVO", short: "O", color: "#4c2a86" },
  { id: "gopay", label: "GoPay", short: "G", color: "#00aed6" },
  { id: "qris", label: "QRIS", short: "Q", color: "#ed1c24" },
  { id: "bca", label: "BCA VA", short: "B", color: "#005baa" },
  { id: "shopee", label: "ShopeePay", short: "S", color: "#ee4d2d" },
];

function makeCode(len = 14) {
  const c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < len; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [method, setMethod] = useState("dana");
  const [processing, setProcessing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);

  // load preloader & orders
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    try {
      const raw = localStorage.getItem("premiumapk_orders");
      if (raw) setOrders(JSON.parse(raw));
    } catch {}
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("premiumapk_orders", JSON.stringify(orders));
    } catch {}
  }, [orders]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (search.trim() && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, category]);

  const closePay = () => {
    setSelected(null);
    setProcessing(false);
  };

  const handleBuy = (p: Product) => {
    if (p.stock === 0) {
      showToast("Stok habis untuk produk ini");
      return;
    }
    setSelected(p);
    setEmail("");
    setWhatsapp("");
    setMethod("dana");
  };

  const submitPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    if (!email.includes("@")) return showToast("Email tidak valid");
    if (whatsapp.length < 9) return showToast("Nomor WhatsApp tidak valid");

    setProcessing(true);
    setTimeout(() => {
      const order: OrderItem = {
        id: "INV-" + Date.now().toString().slice(-8),
        productId: selected.id,
        productName: selected.name,
        productIcon: selected.icon,
        email,
        whatsapp,
        method,
        price: selected.price,
        status: "success",
        date: new Date().toISOString(),
        account: {
          email: "premium_" + makeCode(6).toLowerCase() + "@mailbox.id",
          password: makeCode(12),
        },
      };
      setOrders((prev) => [order, ...prev]);
      setProcessing(false);
      setSelected(null);
      setHistoryOpen(true);
      showToast("Pembayaran berhasil! Akun terkirim ✓");
    }, 1800);
  };

  const copy = (txt: string) => {
    navigator.clipboard?.writeText(txt).then(
      () => showToast("Disalin ke clipboard"),
      () => showToast("Gagal menyalin")
    );
  };

  return (
    <>
      {/* PRELOADER */}
      <div className={`app-preloader ${loading ? "" : "fade-out"}`}>
        <div className="orbit-spinner-wrap">
          <div className="orbit-ring" />
          <div className="orbit-spin">
            <div className="orbit-ball" />
          </div>
        </div>
        <div className="loader-txt">Loading Store</div>
      </div>

      {/* TOAST */}
      <div className={`toast-pill ${toast ? "show" : ""}`}>{toast}</div>

      {/* HEADER */}
      <header className="store-header">
        <div className="store-header-inner">
          <div className="store-logo">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="store-name">
            LYNXIEE MARKET
            <span className="store-sub">Marketplace Aplikasi Premium</span>
          </div>
          <nav className="store-nav">
            <button className="nav-icon-btn" onClick={() => setHistoryOpen(true)}>
              <IconHistory />
              <span className="hidden sm:inline">Riwayat</span>
            </button>
            <a className="nav-icon-btn" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
              <IconHeadset size={14} />
              <span className="hidden sm:inline">CS</span>
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="store-main">
        {/* HERO */}
        <section className="hero-banner">
          <div className="hero-eyebrow">
            <IconFire />
            FLASH SALE — DISKON UP TO 70%
          </div>
          <h1 className="hero-title">
            Belanja Aplikasi <br />
            <span>Premium Resmi</span> Harga Murah
          </h1>
          <p className="hero-sub">
            Akses ribuan akun premium Netflix, Spotify, Canva, ChatGPT &amp; lainnya.
            Proses instan, garansi penuh, support 24 jam non-stop.
          </p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">15k+</div>
              <div className="hero-stat-lbl">Pelanggan Aktif</div>
            </div>
            <div>
              <div className="hero-stat-num">120+</div>
              <div className="hero-stat-lbl">Produk Premium</div>
            </div>
            <div>
              <div className="hero-stat-num">99.9%</div>
              <div className="hero-stat-lbl">Uptime Akun</div>
            </div>
            <div>
              <div className="hero-stat-num">4.9 ★</div>
              <div className="hero-stat-lbl">Rating Pengguna</div>
            </div>
          </div>
        </section>

        {/* FEATURE ROW */}
        <section className="feature-row">
          <div className="feature-card">
            <div className="feature-icon"><IconRocket size={18} /></div>
            <div>
              <div className="feature-title">Proses Instan</div>
              <div className="feature-desc">Akun terkirim &lt; 1 menit</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><IconShield size={18} /></div>
            <div>
              <div className="feature-title">Garansi Penuh</div>
              <div className="feature-desc">Replace selama masa aktif</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><IconRefresh size={18} /></div>
            <div>
              <div className="feature-title">Refund 100%</div>
              <div className="feature-desc">Jika produk bermasalah</div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><IconHeadset size={18} /></div>
            <div>
              <div className="feature-title">CS 24/7</div>
              <div className="feature-desc">Respon &lt; 5 menit</div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="search-box">
          <IconSearch className="search-icon-svg" />
          <input
            className="search-input"
            placeholder="Cari aplikasi premium favoritmu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORIES */}
        <div className="cat-scroll">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`cat-pill ${category === c.id ? "cat-active" : ""}`}
            >
              <CategoryIcon name={c.icon} />
              {c.label}
            </button>
          ))}
        </div>

        {/* SECTION TITLE */}
        <h2 className="section-title">
          <span className="dot" />
          Produk Tersedia
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text3)", marginLeft: 4 }}>
            ({filtered.length})
          </span>
        </h2>

        {/* PRODUCT GRID */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>Tidak ada produk yang cocok dengan pencarianmu.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filtered.map((p) => (
              <article key={p.id} className="p-card fade-in" onClick={() => handleBuy(p)}>
                <div className="p-card-img">
                  {p.badge === "best" && <div className="p-badge best-seller">★ BEST</div>}
                  {p.badge === "new" && <div className="p-badge new-tag">BARU</div>}
                  {p.badge === "out" && <div className="p-badge out-stock">HABIS</div>}
                  {p.stock > 0 && (
                    <div className="p-card-stock-badge">Stok {p.stock}</div>
                  )}
                  <ProductLogo icon={p.icon} />
                </div>
                <div className="p-card-body">
                  <div className="p-name">{p.name}</div>
                  <div className="p-sold">
                    <IconStar size={10} />
                    Terjual {p.sold.toLocaleString("id-ID")}
                  </div>
                  <div className="p-price-row">
                    <div className="p-price">{formatIDR(p.price)}</div>
                    {p.oldPrice && (
                      <div className="p-price-old">{formatIDR(p.oldPrice)}</div>
                    )}
                  </div>
                  <button
                    className="p-buy-btn"
                    disabled={p.stock === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuy(p);
                    }}
                  >
                    <IconCart size={12} />
                    {p.stock === 0 ? "Habis" : "Beli Sekarang"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="store-footer">
        © {new Date().getFullYear()} LYNXIEE MARKET — Dibuat dengan ♥ untuk para pejuang
        cuan. <br />
        Kontak: <a href="https://wa.me/6281234567890">+62 812-3456-7890</a> · Telegram:{" "}
        <a href="#">@lynxieemarket</a>
      </footer>

      {/* PAYMENT FULLSCREEN */}
      {selected && (
        <div className="pay-fullscreen">
          <div className="pay-panel">
            <button className="pay-close" onClick={closePay} aria-label="Tutup">
              <IconClose />
            </button>
            <div className="pay-header-title">Konfirmasi Pesanan</div>

            <div className="pay-prod-preview">
              <div className="pay-prod-icon-wrap">
                <div style={{ width: 50, height: 50 }}>
                  <ProductLogo icon={selected.icon} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="pay-prod-name">{selected.name}</div>
                <div className="pay-prod-desc">{selected.desc}</div>
              </div>
            </div>

            <div className="pay-price-big">{formatIDR(selected.price)}</div>

            <form className="pay-form" onSubmit={submitPay}>
              <div className="input-group">
                <label>Email Pengiriman Akun</label>
                <input
                  type="email"
                  placeholder="contoh@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Nomor WhatsApp</label>
                <input
                  type="tel"
                  placeholder="08123456789"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value.replace(/[^0-9]/g, ""))}
                  required
                />
              </div>
              <div className="input-group">
                <label>Pilih Metode Pembayaran</label>
                <div className="pay-method-list">
                  {PAYMENT_METHODS.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={`pay-method ${method === m.id ? "active" : ""}`}
                    >
                      <div className="pay-method-ico" style={{ background: m.color, color: "#fff" }}>
                        {m.short}
                      </div>
                      {m.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 14,
                  margin: "16px 0 18px",
                  fontSize: 12,
                  color: "var(--text2)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span>Subtotal</span>
                  <span>{formatIDR(selected.price)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span>Biaya Admin</span>
                  <span style={{ color: "var(--emerald)" }}>GRATIS</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 8,
                    paddingTop: 8,
                    borderTop: "1px dashed var(--border2)",
                    color: "var(--text)",
                    fontWeight: 800,
                  }}
                >
                  <span>Total Bayar</span>
                  <span style={{ color: "var(--primary2)" }}>{formatIDR(selected.price)}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary" disabled={processing}>
                {processing ? (
                  <>
                    <span className="spinner" /> Memproses pembayaran...
                  </>
                ) : (
                  <>
                    <IconBolt size={14} /> Bayar Sekarang
                  </>
                )}
              </button>
              <button type="button" className="btn-ghost" onClick={closePay}>
                Batalkan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* HISTORY MODAL */}
      <div className={`modal-overlay ${historyOpen ? "active" : ""}`} onClick={() => setHistoryOpen(false)}>
        <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
          <div className="modal-handle" />
          <div className="modal-pad">
            <div className="modal-title">
              <IconHistory size={18} /> Riwayat Transaksi
            </div>

            {orders.length === 0 ? (
              <div className="history-empty">
                <p style={{ marginBottom: 6 }}>📭</p>
                Belum ada transaksi.<br />
                Mulai belanja produk premium favoritmu!
              </div>
            ) : (
              <>
                <div className="history-list">
                  {orders.map((o) => (
                    <div key={o.id} className="history-item">
                      <div className="history-top">
                        <div>
                          <div className="history-product">{o.productName}</div>
                          <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 2 }}>{o.id}</div>
                        </div>
                        <span className={`history-status ${o.status}`}>
                          <IconCheck size={9} /> {o.status === "success" ? "Sukses" : "Pending"}
                        </span>
                      </div>
                      <div className="history-meta">
                        <span>
                          <IconClock /> {new Date(o.date).toLocaleString("id-ID")}
                        </span>
                        <span>
                          <IconUser /> {o.email}
                        </span>
                        <span style={{ color: "var(--primary2)", fontWeight: 800 }}>
                          {formatIDR(o.price)}
                        </span>
                      </div>
                      {o.account && (
                        <div className="history-codes">
                          <button className="copy-btn" onClick={() => copy(`Email: ${o.account!.email}\nPass: ${o.account!.password}`)}>
                            Copy
                          </button>
                          📧 {o.account.email}
                          <br />
                          🔑 {o.account.password}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="history-clear-btn"
                  onClick={() => {
                    if (confirm("Hapus semua riwayat transaksi?")) {
                      setOrders([]);
                      showToast("Riwayat dihapus");
                    }
                  }}
                >
                  Hapus Semua Riwayat
                </button>
              </>
            )}

            <button
              className="btn-ghost"
              style={{ marginTop: 14 }}
              onClick={() => setHistoryOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
