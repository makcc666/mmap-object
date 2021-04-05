export type SharedValueType = string | number | Buffer

export declare class Open {
    constructor(path: string)

    public close(callback?: (err) => void): void

    public isData(key: string): boolean

    public isOpen(): boolean

    public isClosed(): boolean

    public get_free_memory(): number

    public get_size(): number

    public bucket_count(): number

    public max_bucket_count(): number

    public load_factor(): number

    public max_load_factor(): number

    [key: string]: SharedValueType | ((...args: any) => any)
}

export declare class Create extends Open {
    constructor(path: string, file_size?: number, initial_bucket_count?: number, max_file_size?: number)
}
