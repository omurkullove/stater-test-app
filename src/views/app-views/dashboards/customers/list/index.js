import { Button, Card, Table, Tag, Tooltip } from 'antd';
import axios from 'axios';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import React, { useEffect, useState } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const CustomersListDashboard = () => {
  const [err, setErr] = useState('');
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loadingConfig = {
    spinning: isLoading,
    indicator: <Loading align='center' />,
  };

  const tableColumns = [
    {
      title: 'Customers',
      dataIndex: 'name',
      render: (_, record) => (
        <div className='d-flex'>
          <AvatarStatus
            src={
              'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
            }
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      render: (website) => (
        <a target='_blank' href={website}>
          {website}
        </a>
      ),
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => <Tag className='text-capitalize'>{id}</Tag>,
    },
    {
      title: 'Visit',
      dataIndex: 'id',
      render: (id) => (
        <Tooltip title='Visit'>
          <Button
            type='primary'
            className='mr-2'
            icon={<EyeOutlined />}
            onClick={() => {
              navigate(`${APP_PREFIX_PATH}/dashboards/customers/list/${id}`);
            }}
            size='small'
          />
        </Tooltip>
      ),
    },
  ];

  const fetchUsers = async () => {
    setIsLoading(true);
    setErr(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUserList(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userList);
  return (
    <Card bodyStyle={{ padding: '0px' }}>
      {err ? (
        <div>
          <center style={{ color: 'red', fontSize: '15px' }}>{err}</center>
          <center>
            <button
              onClick={fetchUsers}
              style={{
                background: 'none',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              try again
            </button>
          </center>
        </div>
      ) : (
        <div className='table-responsive'>
          <Table
            columns={tableColumns}
            dataSource={userList}
            rowKey='id'
            loading={loadingConfig}
            scroll={{ x: 768 }}
          />
        </div>
      )}
    </Card>
  );
};

export default CustomersListDashboard;
