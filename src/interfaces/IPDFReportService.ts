// ✅ ISP: Small, focused interface for PDF-related functionality only
export interface IPDFReportService {
    generateReport(data: string): Promise<string>;
}
