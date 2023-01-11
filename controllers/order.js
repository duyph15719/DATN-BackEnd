
if (secureHash === signed) {
  var orderId = vnp_Params["vnp_TxnRef"];
  var rspCode = vnp_Params["vnp_ResponseCode"];
  //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
  res.status(200).json({ RspCode: "00", Message: "success" });
} else {
  res.status(200).json({ RspCode: "97", Message: "Fail checksum" });
}
};