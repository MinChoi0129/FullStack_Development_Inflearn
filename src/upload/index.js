import { Form, Divider, Input } from "antd";
import "./index.css";
function UploadComponent() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item name="upload">
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" alt="" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={
            <div
              className="upload-label"
              name="seller"
              rules={[
                { required: true, message: "판매자 이름을 입력해주세요" },
              ]}
            >
              판매자 명
            </div>
          }
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          /> 
        </Form.Item>
      </Form>
    </div>
  );
}
export default UploadComponent;
