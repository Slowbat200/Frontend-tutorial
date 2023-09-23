import { html5, css3, js, Theory, Tailwind } from '../assets';
export const images = [
  {
    id: 'Theory image',
    icon: Theory,
  },
  {
    id: 'Html image',
    icon: html5,
  },
  {
    id: 'CSS image',
    icon: css3,
  },
  {
    id: 'Js Image ',
    icon: js,
  },
  {
    id: 'Tailwind Image',
    icon: Tailwind,
  },
];

/* The `features` constant is an array of objects that represents different features or topics related
to web development. Each object in the array has properties such as `id`, `title`, `icon`, and
`content`. */
export const features = [
  {
    id: 'feature-1',
    title: 'Teorie',
    icon: Theory,
    content:
      'Co je to front-end a back-end, protokoly pro komunikaci s webem, vývojové prostředí pro developery a mnoho dalšího.',
  },
  {
    id: 'feature-2',
    title: 'Html',
    icon: html5,
    content:
      'Co je to HTML, druhy značek, historie HTML a mnoho příkladů a ukázek kódů.',
  },
  {
    id: 'feature-3',
    title: 'Css',
    icon: css3,
    content:
      'Proč používat Css, historie Css, informace o preprocesorech, využití Css v praxi a mnoho příkladů a ukázek kódů.',
  },
  {
    id: 'feature-4',
    title: 'JavaScript',
    icon: js,
    content:
      'Jak funguje JavaScript, jaké frameworky byly vytvořeny a mnoho dalších příkladů a ukázek kódů',
  },
  {
    id: 'feature-5',
    title: 'Tailwind',
    icon: Tailwind,
    content:
      'Informace o jednom z nejpoužívanějším Css frameworku, provedu vás základní instalací a také jak tento framework správně používat.',
  },
];

/* The `theory` constant is an array of objects that contains information about the theory section of a
web development website. Each object represents a specific piece of information and has properties
such as `id` and `content`. The `id` property is a unique identifier for each piece of information,
and the `content` property contains the actual information about web development theory. This array
can be used to display the theory section on the website, providing users with information about
concepts such as front-end and back-end development, protocols, and integrated development
environments (IDEs). */
export const theory = [
  {
    id: 'theory 0',
    content:
      'Vítejte na stránce Teorie, kde se ponoříme do vnitřního fungování naší webové stránky.',
  },
  {
    id: 'theory 1',
    content:
      'V této sekci budeme prozkoumávat koncepty front-endu a back-endu, protokoly, které pohání naši platformu, a integrovaná vývojová prostředí (IDE), která umožňují našim vývojářům vytvářet plynulé online zážitky.',
  },
  {
    id: 'theory 2',
    content:
      'Jako první si položte otázku, proč chcete vytvořit webovou stránku. Může to být osobní blog, firemní prezentace, e-shop nebo cokoli jiného.',
  },
  {
    id: 'theory 3',
    content: 'Definujte hlavní cílovou skupinu, kterou chcete oslovit.',
  },
  {
    id: 'theory 4',
    content:
      'Plánujte obsah stránky - jaké informace budou na stránce zahrnuty, jak budou uspořádány a jaká bude struktura.',
  },
];

/* The above code is exporting several arrays of objects containing information about frontend
development, backend development, protocols, HTTP, HTTPS, and IDEs. Each object in the arrays has an
id and content property, which provide details about the respective topic. This code is written in
JavaScript and can be used to access and utilize the information in other parts of a program. */
export const frontend = [
  {
    id: 'frontend 0 ',
    content:
      'Front-end naší webové stránky je ta část, kterou uživatelé používají přímo.',
  },
  {
    id: 'frontend 1',
    content:
      'Zahrnuje rozvržení, design a prvky uživatelského rozhraní, které vytvářejí atraktivní a intuitivní uživatelský zážitek.',
  },
  {
    id: 'frontend 2',
    content:
      'Front-end vývojáři používají HTML, CSS a JavaScript k vytváření poutavých webových stránek, které se plynule přizpůsobují různým zařízením. ',
  },
  {
    id: 'frontend 3',
    content:
      'Zajišťují, že webová stránka je esteticky příjemná, responzivní a snadno ovladatelná.',
  },
];

export const backend = [
  {
    id: 'backend 0 ',
    content: 'Za scénou zajišťuje back-end naší webové stránky její funkčnost.',
  },
  {
    id: 'backend 1',
    content:
      'Back-end vývojáři pracují s databázemi, serverovými skriptovacími jazyky (jako je Python, Ruby nebo PHP) a frameworky k zpracování uživatelských požadavků, správě dat a provádění složitých výpočtů.',
  },
  {
    id: 'backend 2',
    content:
      ' Back-end zajišťuje efektivní a bezpečné zpracování uživatelských interakcí, umožňuje generování dynamického obsahu a plynulé interakce.',
  },
];

export const protocols = [
  {
    id: 'protocols  0 ',
    content:
      'Protokoly jsou základ pro komunikaci mezi klientem a serverem. Zejména HTTP (Hypertext Transfer Protocol) a HTTPS(Secure Hypertext Transfer Protocol)',
  },
  {
    id: 'protocols  1',
    content:
      ' HTTP usnadňuje výměnu informací mezi prohlížečem uživatele a webovým serverem, umožňuje načítání webových stránek, obrázků, videí a dalších zdrojů.',
  },
  {
    id: 'protocols  2',
    content:
      'HTTPS přidává vrstvu šifrování, zajišťující, že citlivá data zůstanou během přenosu soukromá.',
  },
];

export const HTTP = [
  {
    id: 'HTTP  0 ',
    content:
      'HTTP je základní protokol pro komunikaci mezi webovými prohlížeči uživatelů a webovými servery. ',
  },
  {
    id: 'HTTP  1',
    content:
      'Pomocí HTTP mohou prohlížeče žádat o různé typy dat, jako jsou webové stránky, obrázky nebo videa, a servery odpovídají poskytnutím těchto dat.',
  },
  {
    id: 'HTTP  2',
    content:
      'Tento protokol umožňuje uživatelům procházet obsah internetu a interagovat s různými webovými aplikacemi.',
  },
];

export const HTTPS = [
  {
    id: 'HTTPS  0 ',
    content:
      ' HTTPS je rozšířením protokolu HTTP, které zajišťuje bezpečnou komunikaci mezi prohlížečem a webovým serverem.',
  },
  {
    id: 'HTTPS  1',
    content:
      'Tímto způsobem jsou data šifrována během přenosu, což ztěžuje možnost odposlechu a zneužití citlivých informací, jako jsou hesla nebo platební údaje.',
  },
  {
    id: 'HTTPS  2',
    content:
      ' Certifikáty SSL/TLS se používají k ověření pravosti serveru a zajištění, že komunikace probíhá s důvěryhodným zdrojem.',
  },
  {
    id: 'HTTPS  3',
    content:
      'V současné době je použití HTTPS stále důležitější, neboť zajišťuje ochranu uživatelských dat a zvyšuje důvěryhodnost webových stránek. ',
  },
  {
    id: 'HTTPS  4',
    content:
      'Použití HTTPS je obzvláště důležité na stránkách, kde jsou vyžadovány citlivé informace, jako jsou údaje o platbách nebo osobní údaje.',
  },
];

export const IDE = [
  {
    id: 'IDE  0 ',
    content:
      'Integrovaná vývojová prostředí, zkráceně IDE, jsou klíčovými nástroji, které umožňují vývojářům programovat efektivněji a organizovaněji.',
  },
  {
    id: 'IDE  1',
    content:
      'Tyto komplexní platformy kombinují různé nástroje, funkce a služby do jednoho uceleného pracovního prostředí, které zjednodušuje tvorbu, testování a údržbu softwaru.',
  },
  {
    id: 'IDE  2',
    content: ' Zde je několik důležitých informací o IDE:',
  },
];

/* The `htmlTheory` constant is an array of objects that contains information about HTML. Each object
represents a specific piece of information and has properties such as `id` and `content`. The `id`
property is a unique identifier for each piece of information, and the `content` property contains
the actual information about HTML. */
export const htmlTheory = [
  {
    id: 'htmlTheory 1',
    content:
      'HTML neboli Hypertext Markup Language je značkovací jazyk vytvořený v roce 1990 pro tvorbu webových stránek a od té doby prošel mnoha značnými změnami, přičemž nejnovější verze je HTML5',
  },
  {
    id: 'htmlTheory 2',
    content:
      'Kromě základních funkcí HTML také podporuje různé další technologie, jako je CSS nebo JavaScript.',
  },
];

export const htmlTags = [
  {
    id: 'htmlTags 1',
    content:
      'Tagy neboli značky jsou základní stavební bloky HTML. Každá značka začíná znakem ' <
      ' a končí znakem ' >
      '.',
  },
  {
    id: 'htmlTags 2',
    content:
      'Značky jsou používány k označení různých prvků na stránce, jako jsou nadpisy, odstavce, odkazy, obrázky apod. Například <h1>, <p>, <a>, <img> jsou příklady značek pro nadpis, text, odkaz a obrázek. V nejnovější verzi HTML5 se nachází okolo 140 různých značek.',
  },
];

export const htmlElements = [
  {
    id: 'htmlElments',
    content:
      'HTML elementy jsou značky, které se používají k vytvoření stránek na webu. Každý element je ohraničen otevírací a uzavírací značkou. Mezi nimi může být text nebo další vnořené elementy. Například <h1>Titulek</h1> je element nadpisu první úrovně.',
  },
];

/* The code you provided is defining two constants: `CssTheory` and `CssSelectors`. */
export const CssTheory = [
  {
    id: 'CssTheory  0 ',
    content:
      'Cascading Style Sheets neboli CSS je jazyk používaný k popisu vzhledu a formátování webových dokumentů napsaných v jazyce HTML nebo jiných značkovacích jazycích.',
  },
  {
    id: 'CssTheory 1',
    content:
      'Hlavním účelem CSS je oddělit prezentaci obsahu od samotného obsahu, což umožňuje vytvářet vizuálně atraktivní a dobře strukturované webové stránky.',
  },
];

export const CssSelectors = [
  {
    id: 'CssTheory 2',
    content:
      'Selektory se používají k identifikaci prvků HTML dokumentu, které mají být stylizovány. Mohou se zakládat na třídách, ID, typech elementů a dalších vlastnostech.',
  },
];

export const PropertiesAndValues = [
  {
    id: 'Hodnoty   0 ',
    content:
      'Každý selektor je spojen s jedním nebo více pravidly obsahujícími vlastnosti a hodnoty. Vlastnosti definují různé aspekty vzhledu, jako jsou barva, velikost písma, okraje, atd. Hodnoty určují konkrétní nastavení vlastnosti.',
  },
];

export const JavaScript = [
  {
    id: 'Js 0',
    content:
      ' JavaScript používá syntaxi podobnou jiným programovacím jazykům, jako je C++ nebo Java. Má proměnné, funkce, podmínky, loopy a další základní konstrukce.',
  },
];

export const basicSyntax = [
  {
    id: 'basic syntax 0',
    content:
      ' V JavaScriptu se používají proměnné pro ukládání dat. Proměnné můžete deklarovat klíčovým slovem `var`, `let` nebo `const`. `Let` a `const` jsou novější a doporučené způsoby pro deklaraci proměnných, protože mají omezenější dosah.',
  },
];

export const DataTypes = [
  {
    id: 'Datatypes 0',
    content:
      'JavaScript podporuje různé datové typy, včetně čísel (int, float, double), řetězců (string), booleanů (true nebo false), polí, objektů a dalších.',
  },
];

export const Operators = [
  {
    id: 'Operators 0',
    content:
      ' JavaScript obsahuje operátory pro provádění různých operací, jako jsou matematické operace, porovnávání a logické operace. Operátory řadíme do několika kategorií v závislosti na tom k čemu se používají:',
  },
];

export const Tailwindcss = [
  {
    id: 'Tailwind 0',
    content:
      'Tailwindcss je jeden z populárních CSS frameworků,  který byl vyvinut tak, aby usnadnil vývoj webových stránek a aplikací. Jedná se o framework založený na konceptu utility-first CSS, což znamená, že namísto psaní vlastního CSS kódu se zaměřuje na používání předem definovaných CSS tříd pro rychlou a efektivní tvorbu rozhraní.',
  },
];

export const InstallConfig = [
  {
    id: 'Install Config 0',
    content:
      'Ve VSCode si otevřete terminál buď pomocí klávesové zkratky `CTRL + ;` a nebo v horní liště vyberete položku terminál. Jakmile se vám terminál otevře tak do něj zadáte dva příkazy.',
  },
];

export const Configure = [
  {
    id: 'Configure 1',
    content:
      'Nyní přejdeme do souboru tailwind.config.js a upravíme cestu tak aby nám vše správně fungovalo.',
  },
];
