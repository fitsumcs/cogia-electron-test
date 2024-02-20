import { useEffect } from 'react';
import { ITodo } from '../../../models/todo.model';
import { Button, Form, Input, Select } from 'antd';
type Props = {
  mode: 'create' | 'edit';
  data?: ITodo;
  onSubmit: (data: ITodo) => void;
};

const TodoForm = ({ mode, data, onSubmit }: Props) => {
  const { Option } = Select;

  const [todoForm] = Form.useForm();

  useEffect(() => {
    if (mode === 'edit') {
      if (data) {
        todoForm.setFieldsValue({
          title: data.title,
          status: data?.status,
        });
      }
    }
  }, []);

  const onHanldeSubmit = (values: ITodo) => {
    onSubmit(values);
    todoForm.resetFields();
  };
  return (
    <Form
      onFinish={onHanldeSubmit}
      form={todoForm}
      className="w-full"
      layout="vertical"
      requiredMark={false}
      initialValues={data}
    >
      <Form.Item
        label={'Title'}
        name={'title'}
        rules={[{ required: true, message: 'Please enter title' }]}
      >
        <Input type="text" name="title" placeholder="Enter todo title" />
      </Form.Item>

      <Form.Item label={'Todo status'} name={'status'}>
        <Select placeholder="Select an option">
          <Option value="Done">Done</Option>
          <Option value="In Progress">In Progress</Option>
        </Select>
      </Form.Item>

      <Button
        className="w-full"
        type="primary"
        htmlType="submit"
        color="primary"
        style={{
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        <span>{mode === 'edit' ? 'Edit todo' : 'Add todo'}</span>
      </Button>
    </Form>
  );
};

export default TodoForm;
