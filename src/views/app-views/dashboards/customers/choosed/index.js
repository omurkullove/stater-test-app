import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import Flex from 'components/shared-components/Flex';

import {
  Form,
  Avatar,
  Button,
  Input,
  DatePicker,
  Row,
  Col,
  message,
  Upload,
} from 'antd';

const CustomersChoosedDashboard = () => {
  const [err, setErr] = useState('');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState();

  const { id } = useParams();

  const fetchUser = async () => {
    setIsLoading(true);
    setErr(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleAvatarChange = (info) => {};

  // get current time (imitate date of birth)
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <>
          <Flex
            alignItems='center'
            mobileFlex={false}
            className='text-center text-md-left'
          >
            <Avatar size={90} src={avatar} icon={<UserOutlined />} />
            <div className='ml-3 mt-md-0 mt-3'>
              <Upload
                beforeUpload={() => false}
                onChange={handleAvatarChange}
                showUploadList={false}
              >
                <Button type='primary'>Change Avatar</Button>
              </Upload>
              <Button className='ml-2' onClick={''}>
                Remove
              </Button>
            </div>
          </Flex>
          <div className='mt-4'>
            <Form
              name='basicInformation'
              layout='vertical'
              initialValues={{
                name: user.name,
                email: user.email,
                username: user.username,
                dateOfBirth: date,
                phone: user.phone,
                website: user.website,
                address: user.address?.street,
                city: user.address?.city,
                zipcode: user.address?.zipcode,
              }}
              onFinish={''}
              onFinishFailed={''}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                  <Row gutter={''}>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item
                        label='Name'
                        name='name'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your name!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item
                        label='Username'
                        name='username'
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item
                        label='Email'
                        name='email'
                        rules={[
                          {
                            required: true,
                            type: 'email',
                            message: 'Please enter a valid email!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Date of Birth' name='dateOfBirth'>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Phone Number' name='phone'>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Website' name='website'>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24}>
                      <Form.Item label='Address' name='address'>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='City' name='city'>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                      <Form.Item label='Post code' name='zipcode'>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button
                    type='primary'
                    htmlType='submit'
                    onClick={() =>
                      message.success('Changes has been successfully saved!')
                    }
                  >
                    Save Change
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </>
      )}
    </>
  );
};

export default CustomersChoosedDashboard;
