import React, { useMemo, useState } from 'react';
import {Spinner} from "react-bootstrap"
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import axios from 'axios';

import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
  } from '@ant-design/icons';

import { notification } from 'antd';


const TourCreation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()

  function uploadImage(x){
    let value = ''
    const data = new FormData();
    data.append("file", x);
    data.append("upload_preset", "fy9voxjt");
    data.append("cloud_name", "ddkosqihs");
    value = fetch(`https://api.cloudinary.com/v1_1/ddkosqihs/image/upload`, {
        method: "post",
        body: data
    }).then(resp => resp.json())
      .then(data => data.url)
      .catch(err => {});

    return value;
  };

  const onSubmit = async(data) => {
    setLoad(true);
    openNotification('topRight')
    // let image = "http://res.cloudinary.com/ddkosqihs/image/upload/v1704029845/upusqb2kfib2pbpe51y2.jpg"
    let image = await uploadImage(main_image)
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/packages/createTour`,{
        ...data,
        image:image
    })
    .then((x)=>{
        console.log(x.data)
    })
    setLoad(false);
  };

  const [main_image, setMain_image] = useState();
  const [displayImage, setDisplayImage] = useState('');
  const [load, setLoad] = useState(false)

  const Context = React.createContext({
    name: 'Default',
  });
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );

  return (
    <>
    {contextHolder}
    <form onSubmit={handleSubmit(onSubmit)}>
    <h3>Create Tour</h3>
    <hr className='mb-5' />
    <Row>
        <Col md={6}>
            <Row>
                <Col md={3} className='py-2'>
                    <div>
                        Name: {" "}<br/>
                        <input {...register("name")} />
                    </div>
                </Col>
                <Col md={3} className='py-2'>
                    <div>
                        City: {" "}<br/>
                        <input {...register("city")} />
                    </div>
                </Col>
                <Col md={3} className='py-2'>
                    Tour Price: {" "}<br/>
                    <input {...register("price")} />
                </Col>
                <Col md={3}></Col>
                <Col md={3} className='py-2'>
                    Image Upload {" "}<br/>
                    <input type="file" 
                        onChange={(e) => {
                            setMain_image(e.target.files[0])
                            setDisplayImage(URL.createObjectURL(e.target.files[0]))
                        }}
                    />
                </Col>
                <Col md={5}></Col>
                <Col md={5} className='py-2'>
                    Description: {" "}<br/>
                    <textarea {...register("desc")} rows="4" cols="50" defaultValue="Enter Tour Description" />
                </Col>
                <Col md={12} className='py-2'>
                    <button type='submit' className='px-3' disabled={load}>
                        {load?<Spinner size='sm' />:'Submit'}
                    </button>
                </Col>
            </Row>
        </Col>
        <Col md={5} style={{border:'1px solid grey', padding:20}}>
            {displayImage!="" && <img src={displayImage} style={{width:'100%'}} />}
            {displayImage=="" && <div>No Image Selected</div>}
        </Col>
    </Row>
    </form>
    </>
  )
}

export default React.memo(TourCreation)