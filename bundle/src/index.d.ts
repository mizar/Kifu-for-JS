import KifuStore from "./stores/KifuStore";
export declare function loadString(kifu: string, id?: string): Promise<KifuStore>;
export declare function load(filePath: string, id?: string): Promise<KifuStore>;
