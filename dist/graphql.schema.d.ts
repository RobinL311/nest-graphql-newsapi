export declare enum Category {
    all = "all",
    business = "business",
    entertainment = "entertainment",
    general = "general",
    health = "health",
    science = "science",
    sports = "sports",
    technology = "technology"
}
export declare enum Country {
    all = "all",
    ae = "ae",
    ar = "ar",
    at = "at",
    au = "au",
    be = "be",
    bg = "bg",
    br = "br",
    ca = "ca",
    ch = "ch",
    cn = "cn",
    co = "co",
    cu = "cu",
    cz = "cz",
    de = "de",
    eg = "eg",
    fr = "fr",
    gb = "gb",
    gr = "gr",
    hk = "hk",
    hu = "hu",
    id = "id",
    ie = "ie",
    il = "il",
    in = "in",
    it = "it",
    jp = "jp",
    kr = "kr",
    lt = "lt",
    lv = "lv",
    ma = "ma",
    mx = "mx",
    my = "my",
    ng = "ng",
    nl = "nl",
    no = "no",
    nz = "nz",
    ph = "ph",
    pl = "pl",
    pt = "pt",
    ro = "ro",
    rs = "rs",
    ru = "ru",
    sa = "sa",
    se = "se",
    sg = "sg",
    si = "si",
    sk = "sk",
    th = "th",
    tr = "tr",
    tw = "tw",
    ua = "ua",
    us = "us",
    ve = "ve",
    za = "za"
}
export declare enum Language {
    all = "all",
    ar = "ar",
    de = "de",
    en = "en",
    es = "es",
    fr = "fr",
    he = "he",
    it = "it",
    nl = "nl",
    no = "no",
    pt = "pt",
    ru = "ru",
    se = "se",
    ud = "ud",
    zh = "zh"
}
export declare enum SortBy {
    relevancy = "relevancy",
    popularity = "popularity",
    publishedAt = "publishedAt"
}
export declare class EverythingInput {
    sources?: string[];
    domains?: string[];
    excludeDomains?: string[];
    from?: Date;
    to?: Date;
    language?: Language;
    sortBy?: SortBy;
    pageSize: number;
    page: number;
}
export declare class HeadlineInput {
    country?: Country;
    category?: Category;
    sources?: string[];
    pageSize: number;
    page: number;
}
export declare class SourceInput {
    category?: Category;
    language?: Language;
    country?: Country;
}
export declare class Article {
    source?: SourceObj;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: Date;
    content?: string;
}
export declare class ArticleResponse {
    status?: string;
    totalResults?: number;
    articles?: Article[];
}
export declare class NewApiError {
    status?: string;
    code?: string;
    message?: string;
}
export declare abstract class IQuery {
    abstract everything(q: string, options?: EverythingInput): ArticleResponse | Promise<ArticleResponse>;
    abstract topHeadlines(q: string, options?: HeadlineInput): ArticleResponse | Promise<ArticleResponse>;
    abstract sources(options: SourceInput): SourceResponse | Promise<SourceResponse>;
}
export declare class Source {
    id?: string;
    name?: string;
    description?: string;
    url?: string;
    category?: Category;
    language?: string;
    country?: Country;
}
export declare class SourceObj {
    id?: string;
    name?: string;
}
export declare class SourceResponse {
    status?: string;
    sources?: Source[];
}
