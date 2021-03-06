/**
 * 專案名稱： wistroni40-backend-utility
 * 部門代號： MLD500
 * 檔案說明： 抽象消費者
 * @CREATE Thursday, 9th September 2021 2:29:11 pm
 * @author Steve Y Lin
 * @contact Wits.SteveYLin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
import { Observable } from 'rxjs';
/**
 * 抽象消費者
 */
export interface Consumer<D = any> {
    /**
     * 消費資料
     *
     * @method public
     * @return 取得要消費的資料
     */
    consume(): Observable<D>;
}
