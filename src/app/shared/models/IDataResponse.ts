export interface IDataResponse<T> {
    success: boolean;
    source: string;
    data: T;
}