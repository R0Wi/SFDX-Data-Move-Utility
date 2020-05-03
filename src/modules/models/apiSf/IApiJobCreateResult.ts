/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


import { CsvChunks } from "../../components/commonUtils";
import ApiResult from "./apiResult";




export default interface IApiJobCreateResult {
    chunks: CsvChunks,        
    jobCreateResult: ApiResult,
    connection?: any,
    allRecords?: Array<any>
}
