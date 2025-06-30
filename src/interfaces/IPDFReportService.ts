export interface IPDFReportService {
    generateReport(data: string): Promise<string>;
}
