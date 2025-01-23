import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const EducationCommunity = () => {
  const images = [
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp',
    'https://img.pikbest.com/backgrounds/20220119/school-season-students-sky-blue-cartoon-background_6238265.jpg!w700wp'
  ]

  return (
    <Box
      className="df aic jcc"
      sx={{
        width: '100%',
        flexDirection: 'column',
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Tiêu đề */}
      <Box
        className="df aic jcc"
        sx={{
          marginBottom: '55px',
          flexDirection: 'column',
          width: '66%'
        }}
      >
        {/* <Box
					className="df aic jcc"
					sx={{ position: 'relative', width: '56px', height: '56px' }}
				>
					<img
						src="/images/landing/ver3/image-section/networking.gif"
						alt="Networking"
						style={{ width: '100%', height: '100%' }}
					/>
				</Box> */}
        <Typography
          variant="h4"
          sx={{
            marginTop: '14px',
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
					Hoạt động tiêu biểu từ cộng đồng giáo dục
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
					Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại
					trong quá trình giảng dạy, dạy học ứng dụng công nghệ SHub
					Classroom.
        </Typography>
      </Box>

      {/* Slider and Navigation */}
      <Box
        sx={{ width: '100%', padding: '0 16px', position: 'relative' }}
      >
        <Swiper
          spaceBetween={32}
          slidesPerView={6}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="df aic jcc"
          style={{ paddingTop: '30px' }}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '160px',
                marginRight: '32px'
              }}
            >
              <Box
                className="df aic jcc"
                sx={{
                  position: 'relative',
                  top: index % 2 === 0 ? '0' : '-30px',
                  width: '160px'
                }}
              >
                <img
                  src={image}
                  alt={`Carousel-Item-${index}`}
                  height="396"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px'
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default EducationCommunity
