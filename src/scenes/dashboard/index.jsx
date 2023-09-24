import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import ProgressCircle from '../../components/ProgressCircle';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='10px'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Header
          title='DASHBOARD'
          subtitle='Welcome to the Dashboard'
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.greenAccent[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* grid and charts */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='15px'
      >
        {/* row 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+75%'
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[400], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='1,232'
            subtitle='Sales'
            progress='0.59'
            increase='+59%'
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[400], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='615'
            subtitle='New Clients'
            progress='0.31'
            increase='+31%'
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[400], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox
            title='62,321'
            subtitle='Inbound Traffic'
            progress='0.63'
            increase='+63%'
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[400], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt='25px'
            p='0 20px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            position='relative'
            zIndex='15'
          >
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}
              >
                Revenue generated
              </Typography>
              <Typography
                variant='h3'
                fontWeight='bold'
                color={colors.greenAccent[500]}
              >
                $79,315.32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            height='250px'
            ml='-15px'
            mt='-35px'
            mr='-15px'
            position='relative'
            zIndex='1'
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p='15px'
          >
            <Typography
              color={colors.grey[100]}
              variant='h5'
              fontweight='600'
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontweight='600'
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[600]}
                p='5px 10px'
                borderRadius='4px'
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* row 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography
            variant='h5'
            fontweight='600'
          >
            Campaign
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'
          >
            <ProgressCircle
              progress='.7'
              size='125'
            />
            <Typography
              variant='h3'
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $69,230 Revenue Generated
            </Typography>
            <Typography>*Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography
            variant='h5'
            fontweight='600'
          >
            Sales Quantity
          </Typography>
          <Box
            height='280px'
            m='-30px'
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography
            variant='h5'
            fontweight='600'
          >
            Sales Quantity
          </Typography>
          <Box
            height='280px'
            m='-30px'
          >
            <PieChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
