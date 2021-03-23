import React, { useCallback, useRef } from 'react';
import { Button, message, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadFile } from 'antd/lib/upload/interface';
import { useToggle } from 'react-use';
import { Wrapper } from './Styled';
import { checkUploadFileFormat } from '../utils';
import fileApis from './fileApis';

export type ImageAcceptTypes = '.jpg' | '.jepg' | '.png' | '.gif';

export type ImageFieldProps = {
  label: string;
  variables?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
} & {
  placeholder: string;
  accept: [];
  validate: {
    editable: string;
    required: string;
    viewable: string;
  };
};

const FormImage: React.FC<ImageFieldProps> = (props) => {
  const { value, placeholder, accept, validate, onChange } = props;
  const ref = useRef<string | null>(null);
  const [visible, toggle] = useToggle(false);

  let _image: UploadFile | null = null;
  try {
    _image = JSON.parse(value ?? '') as UploadFile;
  } catch (e) {}

  const uploadImage = useCallback(
    async (options) => {
      const { file } = options;
      if (!checkUploadFileFormat(file.name, accept ?? [])) {
        message.error('图片格式不正确，请重新选择');
        return false;
      }
      // 检测图片大小
      if (file.size > 2 * 1024 * 1024) {
        message.error('上传图片不能超过2M');
        return false;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadType', 'image');
      formData.append('acceptFileTypes', (accept ?? []).toString());
      ref.current = value ?? null;
      onChange &&
        onChange(
          JSON.stringify({
            uid: file.uid,
            name: file.name,
            status: 'uploading'
          })
        );

      try {
        const img = await fileApis.uploadFile(formData);
        if (img.originUrl && img.thumbnailUrl) {
          onChange &&
            onChange(
              JSON.stringify({
                uid: file.uid,
                name: file.name,
                url: img.originUrl,
                thumbUrl: img.thumbnailUrl,
                type: 'image'
              })
            );
        } else {
          onChange && onChange(ref.current);
          ref.current = null;
          message.error('图片上传失败，请稍后再试');
        }
      } catch (e) {
        onChange && onChange(ref.current);
        ref.current = null;
        message.error('图片上传失败，请稍后再试');
      }
      return true;
    },
    [accept, onChange, value]
  );

  const checkImgWidth = (file: UploadFile) => {
    return new Promise<{ width: number; height: number }>((resolve) => {
      const img = new Image();
      let width;
      let height;
      img.src = file.thumbUrl || '';
      img.onload = () => {
        width = img.width;
        height = img.height;
        resolve({ width, height });
      };
    })
      .catch()
      .then((_value) => {
        if (_value) {
          toggle(true);
        }
      });
  };

  const handleRemove = () => {
    onChange && onChange(null);
  };

  return (
    <Wrapper>
      <Upload
        accept={(accept ?? []).join()}
        fileList={_image ? [_image] : []}
        disabled={!validate?.editable}
        listType='picture'
        customRequest={uploadImage}
        onRemove={handleRemove}
        onPreview={checkImgWidth}
        locale={{
          downloadFile: '',
          previewFile: '',
          removeFile: '',
          uploadError: '上传失败',
          uploading: '上传中。。。'
        }}
      >
        <Button icon={<UploadOutlined />} disabled={!validate?.editable}>
          {placeholder}
        </Button>
      </Upload>
      <Modal
        visible={visible}
        title={_image?.name}
        width='fit-content'
        footer={null}
        onCancel={() => {
          toggle(false);
        }}
      >
        <img
          alt={_image?.name}
          style={{ maxWidth: '80vw', maxHeight: '80vh' }}
          src={_image?.url}
        />
      </Modal>
    </Wrapper>
  );
};

export default FormImage;
