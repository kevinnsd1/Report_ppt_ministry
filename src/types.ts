export interface ReportRow {
    date: string;
    publication: string;
    title: string;
    link: string;
    summary: string | string[]; // Support plain text or array (will be bulleted)
    sentiment: string;
    remarks: string;
}

// Rich text segment with optional color
export interface RichTextSegment {
    text: string;
    color?: string;   // hex color, e.g. 'FF0000'
    bold?: boolean;
    italic?: boolean;
}

// A paragraph can be a plain string or an array of rich text segments
export type RichParagraph = string | RichTextSegment[];

// Base Slide Interface
export interface BaseSlide {
    type: 'table' | 'text' | 'title' | 'summary_wayforward' | 'dashboard';
    sectionTitle?: string;
}

// Table Slide Interface
export interface TableSlide extends BaseSlide {
    type: 'table';
    tableTitle?: string;
    rows: ReportRow[];
}

// Text Slide Interface
export interface TextSlide extends BaseSlide {
    type: 'text';
    title?: string;
    content: string;
}

// Summary + Way Forward Slide Interface
export interface SummaryWayForwardSlide extends BaseSlide {
    type: 'summary_wayforward';
    summaryTitle?: string;        // defaults to "SUMMARY"
    summaryParagraphs: RichParagraph[];  // array of paragraphs for SUMMARY
    wayForwardTitle?: string;     // defaults to "WAY FORWARD"
    wayForwardParagraphs: RichParagraph[];  // array of paragraphs for WAY FORWARD
}

export interface MinistryData {
    name: string;
    alias?: string;
    value: number;
    text: string;
    logoUrl?: string;
}

export interface DashboardColumn {
    title: string;
    chartTitle: string;
    items: MinistryData[];
}

export interface DashboardSlide extends BaseSlide {
    type: 'dashboard';
    leftCol: DashboardColumn;
    rightCol: DashboardColumn;
}

// Union Type for Slides
export type ReportSlide = TableSlide | TextSlide | SummaryWayForwardSlide | DashboardSlide;

export interface ReportMeta {
    title?: string;
    subtitle?: string;
    footerTitle?: string;
    footerText?: string;
    footerAddress?: string;
    logo?: string;
}

export interface ReportData {
    meta?: ReportMeta;
    slides: ReportSlide[]; // Array of slides
}
