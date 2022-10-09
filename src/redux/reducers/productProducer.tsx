import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface ProductModel {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: NguoiTAO;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}

export interface DanhMuc {
  maDanhMuc: string;
  tenDanhMuc: string;
}

export interface NguoiTAO {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}

const initialState:any = {
  arrProduct: [],
  arrProductList: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProductAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.arrProduct = action.payload;
    },
    getAllProductListAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.arrProductList = action.payload;
    },
  },
});

export const { getAllProductAction, getAllProductListAction } = productReducer.actions;

export default productReducer.reducer;



export const getProductApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
      console.log(result.data);
      let arrCourses: ProductModel[] = result.data;
      const action = getAllProductAction(arrCourses);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};



export const getProductListApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      console.log(result.data);
      let arrDirectory: ProductModel[] = result.data;
      const action = getAllProductListAction(arrDirectory);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
