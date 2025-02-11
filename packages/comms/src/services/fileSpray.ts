import { FileSprayServiceBase, FileSpray } from "./wsdl/FileSpray/v1.25/FileSpray";

export {
    FileSpray
};

export interface SprayFixedEx {
    sourceIP?: string;
    sourcePlane?: string;
    sourcePath?: string;
    srcxml?: string;
    sourceFormat?: string;
    sourceRecordSize?: number;
    destGroup?: string;
    destLogicalName?: string;
    destNumParts?: number;
    overwrite?: boolean;
    replicate?: boolean;
    ReplicateOffset?: number;
    maxConnections?: number;
    throttle?: number;
    transferBufferSize?: number;
    prefix?: string;
    nosplit?: boolean;
    norecover?: boolean;
    compress?: boolean;
    push?: boolean;
    pull?: boolean;
    noCommon?: boolean;
    encrypt?: string;
    decrypt?: string;
    wrap?: boolean;
    failIfNoSourceFile?: boolean;
    recordStructurePresent?: boolean;
    quotedTerminator?: boolean;
    expireDays?: number;
    DFUServerQueue?: string;
}

export interface SprayVariableEx {
    sourceIP?: string;
    sourcePlane?: string;
    sourcePath?: string;
    srcxml?: string;
    sourceMaxRecordSize?: number;
    sourceFormat?: number;
    NoSourceCsvSeparator?: boolean;
    sourceCsvSeparate?: string;
    sourceCsvTerminate?: string;
    sourceCsvQuote?: string;
    sourceCsvEscape?: string;
    sourceRowTag?: string;
    destGroup?: string;
    destLogicalName?: string;
    overwrite?: boolean;
    replicate?: boolean;
    ReplicateOffset?: number;
    maxConnections?: number;
    throttle?: number;
    transferBufferSize?: number;
    prefix?: string;
    nosplit?: boolean;
    norecover?: boolean;
    compress?: boolean;
    push?: boolean;
    pull?: boolean;
    noCommon?: boolean;
    encrypt?: string;
    decrypt?: string;
    failIfNoSourceFile?: boolean;
    recordStructurePresent?: boolean;
    quotedTerminator?: boolean;
    sourceRowPath?: string;
    isJSON?: boolean;
    expireDays?: number;
    DFUServerQueue?: string;
    srcUsername?: string;
    srcPassword?: string;
}

export interface DesprayEx {
    destGroup?: string;
    sourceLogicalName?: string;
    destIP?: string;
    destPath?: string;
    destPlane?: string;
    dstxml?: string;
    overwrite?: boolean;
    maxConnections?: number;
    throttle?: number;
    transferBufferSize?: number;
    splitprefix?: string;
    norecover?: boolean;
    wrap?: boolean;
    multiCopy?: boolean;
    SingleConnection?: boolean;
    DFUServerQueue?: string;
    compress?: boolean;
    encrypt?: string;
    decrypt?: string;
}

export class FileSprayService extends FileSprayServiceBase {

    SprayFixedEx(request: SprayFixedEx): Promise<FileSpray.SprayFixedResponse> {
        return this._connection.send("SprayFixed", request);
    }

    SprayVariableEx(request: SprayVariableEx): Promise<FileSpray.SprayResponse> {
        return this._connection.send("SprayVariable", request, "json", false, null, "SprayResponse");
    }

    DesprayEx(request: DesprayEx): Promise<FileSpray.DesprayResponse> {
        return this._connection.send("Despray", request);
    }

}
