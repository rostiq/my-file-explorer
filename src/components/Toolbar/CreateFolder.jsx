import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import useDropbox from "../../hooks/useDropbox";
import useCustomParams from "../../hooks/useCustomParams";

const CreateFolder = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const { createFolder } = useDropbox();
  const {fullPath} = useCustomParams();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    createFolder(fullPath, newFolderName);
    setIsModalVisible(false);
    setNewFolderName("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFolderNameChange = (e) => {
    setNewFolderName(e.target.value);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Folder
      </Button>
      <Modal
        title="Create New Folder"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Folder Name">
            <Input value={newFolderName} onChange={onFolderNameChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateFolder;
