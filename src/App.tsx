import { useEffect, useState } from "react";

const A = "/assets";

type Slide = {
  eyebrow: string;
  year: string;
  title: string;
  english: string;
  date: string;
  place: string;
};

const slides: Slide[] = [
  {
    eyebrow: "도심 속, 정원이 만드는\n더 나은 서울",
    year: "2026",
    title: "서울정원박람회",
    english: "SEOUL GARDEN SHOW 2026",
    date: "2026. 5. 16 (토) – 5. 24 (일)",
    place: "서울숲 일대",
  },
  {
    eyebrow: "서울의 일상에 피어나는\n정원의 시간",
    year: "2026",
    title: "정원 전시관",
    english: "GARDEN EXHIBITION",
    date: "2026. 5. 16 (토) – 5. 24 (일)",
    place: "서울숲 가족마당",
  },
  {
    eyebrow: "보고, 만들고, 함께 즐기는\n초록빛 하루",
    year: "2026",
    title: "정원 체험 프로그램",
    english: "GARDEN WORKSHOP",
    date: "2026. 5. 16 (토) – 5. 24 (일)",
    place: "서울숲 커뮤니티센터",
  },
  {
    eyebrow: "정원에서 만나는 음악과\n여유로운 저녁",
    year: "2026",
    title: "정원 콘서트",
    english: "GARDEN CONCERT",
    date: "2026. 5. 16 (토) – 5. 24 (일)",
    place: "서울숲 야외무대",
  },
];

const programs = [
  { title: "정원 전시관", description: "다양한 테마의 정원을 만나보세요", kind: "exhibition" },
  { title: "정원 체험 프로그램", description: "직접 만드는 정원의 즐거움", kind: "workshop" },
  { title: "정원 콘서트", description: "정원 속에서 즐기는 음악", kind: "concert" },
];

const notices = [
  ["10.20", "2026 서울정원박람회 사전예매 안내"],
  ["10.17", "정원해설 프로그램 운영 안내"],
  ["10.15", "주차 및 교통 안내"],
];

// Figma의 잎 모양 로고를 헤더와 푸터에서 재사용합니다.
function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand ${footer ? "brand--footer" : ""}`}
      href="#home"
      aria-label="서울 정원박람회 홈"
    >
      <span className="brand__mark" aria-hidden="true">
        <img src={`${A}/${footer ? "00072" : "ea138"}.svg`} alt="" />
        <i />
        <img src={`${A}/${footer ? "7df1f" : "f23db"}.svg`} alt="" />
      </span>
      <span className="brand__copy">
        <strong>서울 정원박람회</strong>
        <small>SEOUL GARDEN SHOW</small>
      </span>
    </a>
  );
}

// 풍경은 원본 SVG를 레이어로 쌓아 Figma의 깊이감을 유지합니다.
function Landscape() {
  const trees = Array.from({ length: 30 });
  const flowers = [
    "08f4a",
    "e9d31",
    "39964",
    "9dc17",
    "041d5",
    "3f678",
    "2ddc9",
    "907d4",
    "13596",
    "497ae",
    "525d8",
    "4a4af",
  ];
  const archLeaves = Array.from({ length: 18 });
  const rightLeaves = Array.from({ length: 10 });

  return (
    <div className="landscape" aria-hidden="true">
      <img className="cloud cloud--1" src={`${A}/26341.svg`} alt="" />
      <img className="cloud cloud--2" src={`${A}/d3240.svg`} alt="" />
      <img className="cloud cloud--3" src={`${A}/47dca.svg`} alt="" />
      <img className="cloud cloud--4" src={`${A}/c660e.svg`} alt="" />
      <img className="cloud cloud--5" src={`${A}/d6fd2.svg`} alt="" />
      <div className="skyline">
        {Array.from({ length: 11 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
      <span className="tower" />
      <img className="hill hill--far" src={`${A}/fd02b.svg`} alt="" />
      <img className="hill hill--middle" src={`${A}/6ca99.svg`} alt="" />
      <img className="hill hill--near" src={`${A}/4c781.svg`} alt="" />
      <div className="trees">
        {trees.map((_, index) => (
          <img key={index} src={`${A}/${["b04ec", "0b8f9", "773a8"][index % 3]}.svg`} alt="" />
        ))}
      </div>
      <div className="tower-arch">
        <img src={`${A}/3e0ee.svg`} alt="" />
        <img src={`${A}/7897e.svg`} alt="" />
        <img src={`${A}/43e93.svg`} alt="" />
        <span className="garden-path" />
        <div className="arch-leaves">
          {archLeaves.map((_, index) => (
            <img key={index} src={`${A}/${index % 2 ? "1821d" : "7df0d"}.svg`} alt="" />
          ))}
        </div>
      </div>
      <img className="meadow meadow--left" src={`${A}/92f7b.svg`} alt="" />
      <img className="meadow meadow--light" src={`${A}/4467f.svg`} alt="" />
      <img className="meadow meadow--right" src={`${A}/83c53.svg`} alt="" />
      <img className="lawn lawn--1" src={`${A}/40cfe.svg`} alt="" />
      <img className="lawn lawn--2" src={`${A}/f6ee9.svg`} alt="" />
      <img className="lawn lawn--3" src={`${A}/1799b.svg`} alt="" />
      <img className="lawn lawn--4" src={`${A}/28d13.svg`} alt="" />
      <div className="meadow-flowers">
        {flowers.map((flower, index) => (
          <img
            key={flower}
            src={`${A}/${flower}.svg`}
            alt=""
            style={{ "--i": index } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="right-flower">
        {["d2565", "245c5", "f75a2", "245c5", "d2565", "f75a2"].map((flower, index) => (
          <img key={`${flower}-${index}`} src={`${A}/${flower}.svg`} alt="" />
        ))}
      </div>
      <div className="right-leaves">
        {rightLeaves.map((_, index) => (
          <img key={index} src={`${A}/${index % 2 ? "12734" : "2c2d9"}.svg`} alt="" />
        ))}
      </div>
      <img className="hero-feather" src={`${A}/975f2.svg`} alt="" />
    </div>
  );
}

// 카드 썸네일은 원본 일러스트 에셋을 조합해 구성합니다.
function ProgramArt({ kind }: { kind: string }) {
  if (kind === "exhibition") {
    return (
      <div className="program-art program-art--exhibition">
        <img src={`${A}/d5173.svg`} alt="" />
        <img src={`${A}/08190.svg`} alt="" />
        <div className="flower-row">
          {Array.from({ length: 10 }, (_, index) => (
            <i key={index}>
              <img src={`${A}/${index % 2 ? "eab9f" : "50a7b"}.svg`} alt="" />
            </i>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "workshop") {
    return (
      <div className="program-art program-art--workshop">
        {[0, 1, 2].map((item) => (
          <span key={item}>
            <img src={`${A}/5ff7d.svg`} alt="" />
            <img src={`${A}/9febf.svg`} alt="" />
          </span>
        ))}
        <img className="workshop-leaf workshop-leaf--left" src={`${A}/1fdb0.svg`} alt="" />
        <img className="workshop-leaf workshop-leaf--right" src={`${A}/c9692.svg`} alt="" />
      </div>
    );
  }
  return (
    <div className="program-art program-art--concert">
      <img src={`${A}/ba9d0.svg`} alt="" />
      <span className="stage">
        {Array.from({ length: 5 }, (_, index) => (
          <img key={index} src={`${A}/296df.svg`} alt="" />
        ))}
      </span>
    </div>
  );
}

function PanelTitle({ title, english, href }: { title: string; english: string; href: string }) {
  return (
    <div className="panel-title">
      <h2>{title}</h2>
      <span>{english}</span>
      <a href={href}>
        더보기 <b>›</b>
      </a>
    </div>
  );
}

function ProgramPanel() {
  return (
    <section className="panel program-panel" id="programs">
      <PanelTitle title="주요 프로그램" english="PROGRAM" href="#program-list" />
      <div className="program-list" id="program-list">
        {programs.map((program) => (
          <article className="program-item" key={program.title}>
            <ProgramArt kind={program.kind} />
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LocationPanel() {
  const openMap = () =>
    window.open("https://map.naver.com/p/search/서울숲", "_blank", "noopener,noreferrer");
  return (
    <section className="panel location-panel" id="visit">
      <PanelTitle title="오시는 길" english="LOCATION" href="#map" />
      <button
        className="map"
        id="map"
        type="button"
        onClick={openMap}
        aria-label="지도에서 서울숲 보기"
      >
        <span className="map__road map__road--1" />
        <span className="map__road map__road--2" />
        <span className="map__road map__road--3" />
        <span className="map__road map__road--4" />
        <img src={`${A}/52395.svg`} alt="" />
        <img src={`${A}/8a527.svg`} alt="" />
        <img src={`${A}/39031.svg`} alt="" />
        <img src={`${A}/222e3.svg`} alt="" />
        <strong>서울숲</strong>
      </button>
      <div className="address">
        <img src={`${A}/409ab.svg`} alt="" />
        <img className="address__pin-center" src={`${A}/812ed.svg`} alt="" />
        <span>서울특별시 성동구 서울숲길 273</span>
        <button type="button" onClick={openMap}>
          찾아가기 →
        </button>
      </div>
    </section>
  );
}

function NewsPanel() {
  return (
    <section className="panel news-panel" id="news">
      <PanelTitle title="공지사항" english="NEWS" href="#notice-list" />
      <div className="notice-list" id="notice-list">
        {notices.map(([date, title]) => (
          <a href={`#notice-${date}`} id={`notice-${date}`} key={date}>
            <time>{date}</time>
            <span>{title}</span>
          </a>
        ))}
      </div>
      <div className="news-leaves" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <img key={index} src={`${A}/${index % 2 ? "a6eb5" : "0af7f"}.svg`} alt="" />
        ))}
      </div>
    </section>
  );
}

function ReservationModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title">
        <button className="modal__close" type="button" onClick={onClose} aria-label="팝업 닫기">
          ×
        </button>
        <span className="modal__eyebrow">SEOUL GARDEN SHOW 2026</span>
        <h2 id="reservation-title">사전예매 안내</h2>
        <p>2026 서울정원박람회 사전예매가 곧 시작됩니다.</p>
        <dl>
          <div>
            <dt>행사 기간</dt>
            <dd>2026. 5. 16 – 5. 24</dd>
          </div>
          <div>
            <dt>행사 장소</dt>
            <dd>서울숲 일대</dd>
          </div>
        </dl>
        <a
          className="modal__action"
          href="mailto:seoulgardenshow@seoul.go.kr?subject=2026 서울정원박람회 사전예매 알림 신청"
        >
          예매 알림 신청하기 →
        </a>
      </div>
    </div>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const results = [...programs.map((item) => item.title), ...notices.map((item) => item[1])].filter(
    (item) => item.includes(query),
  );
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="modal search-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
      >
        <button className="modal__close" type="button" onClick={onClose} aria-label="검색 닫기">
          ×
        </button>
        <h2 id="search-title">사이트 검색</h2>
        <label>
          <span className="sr-only">검색어</span>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="찾고 싶은 내용을 입력하세요"
          />
        </label>
        {query && (
          <ul>
            {results.length ? (
              results.map((result) => <li key={result}>{result}</li>)
            ) : (
              <li>검색 결과가 없습니다.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const slide = slides[slideIndex];

  const moveSlide = (direction: number) =>
    setSlideIndex((current) => (current + direction + slides.length) % slides.length);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" id="home">
      <header className="header">
        <div className="header__inner">
          <Brand />
          <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="주요 메뉴">
            <a href="#about" onClick={closeMenu}>
              박람회 안내
            </a>
            <a href="#visit" onClick={closeMenu}>
              관람 안내
            </a>
            <a href="#programs" onClick={closeMenu}>
              프로그램
            </a>
            <a href="#walk" onClick={closeMenu}>
              정원 산책
            </a>
            <a href="#news" onClick={closeMenu}>
              소식
            </a>
          </nav>
          <div className="header__actions">
            <button
              className="search-button"
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="검색 열기"
            >
              <img src={`${A}/8190c.svg`} alt="" />
              <span />
            </button>
            <button
              className="ticket-button"
              type="button"
              onClick={() => setReservationOpen(true)}
            >
              예매하기 <b>→</b>
            </button>
            <button
              className={menuOpen ? "menu-button menu-button--open" : "menu-button"}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="모바일 메뉴 열기"
              aria-expanded={menuOpen}
            >
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className={`hero hero--${slideIndex + 1}`} id="about">
          <Landscape />
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="hero__eyebrow">{slide.eyebrow}</p>
              <h1>
                <span>{slide.year}</span>
                {slide.title}
              </h1>
              <p className="hero__english">{slide.english}</p>
              <div className="hero__details">
                <p>
                  <i className="calendar-icon" />
                  {slide.date}
                </p>
                <p>
                  <img src={`${A}/25568.svg`} alt="" />
                  {slide.place}
                </p>
              </div>
              <button
                className="hero__cta"
                type="button"
                onClick={() =>
                  document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                박람회 자세히 보기 <b>→</b>
              </button>
              <div className="slide-control" aria-label="히어로 슬라이드 제어">
                <span>{String(slideIndex + 1).padStart(2, "0")} / 04</span>
                <i>
                  <b style={{ width: `${(slideIndex + 1) * 25}%` }} />
                </i>
                <button type="button" onClick={() => moveSlide(-1)} aria-label="이전 슬라이드">
                  <img src={`${A}/2a1ec.svg`} alt="" />
                  <span>‹</span>
                </button>
                <button type="button" onClick={() => moveSlide(1)} aria-label="다음 슬라이드">
                  <img src={`${A}/2a1ec.svg`} alt="" />
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="content-area" id="walk">
          <div className="content-grid">
            <ProgramPanel />
            <LocationPanel />
            <NewsPanel />
          </div>
        </div>
      </main>

      <footer className="footer">
        <img className="footer__wave footer__wave--1" src={`${A}/a9451.svg`} alt="" />
        <img className="footer__wave footer__wave--2" src={`${A}/a3ca5.svg`} alt="" />
        <img className="footer__wave footer__wave--3" src={`${A}/81189.svg`} alt="" />
        <div className="footer__inner">
          <div className="footer__brand-row">
            <Brand footer />
            <p>
              정원이 만드는 서울,
              <br />
              그리고 우리의 내일
            </p>
          </div>
          <p className="copyright">© 2026 SEOUL GARDEN SHOW. ALL RIGHTS RESERVED.</p>
          <div className="socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="인스타그램"
            >
              <img src={`${A}/00182.svg`} alt="" />
              <span>◎</span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="유튜브">
              <img src={`${A}/00182.svg`} alt="" />
              <span>▶</span>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="페이스북"
            >
              <img src={`${A}/00182.svg`} alt="" />
              <span>f</span>
            </a>
            <a href="mailto:seoulgardenshow@seoul.go.kr" aria-label="이메일">
              <img src={`${A}/00182.svg`} alt="" />
              <span>✉</span>
            </a>
            <span>SEOUL, A CITY IN BLOOM</span>
          </div>
        </div>
      </footer>

      {reservationOpen && <ReservationModal onClose={() => setReservationOpen(false)} />}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </div>
  );
}
