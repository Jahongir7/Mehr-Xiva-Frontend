import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import { fNumber } from '../../utils/formatNumber';
import  BaseOptionChart from './BaseOptionChart';

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(5),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible'
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
    },
    '& .apexcharts-legend-text': {
        textTransform: 'unset'
    }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [1234, 5435, 1443];

export default function StudentDistributionChart() {
    const theme = useTheme();

    const chartOptions = merge(BaseOptionChart(), {
        colors: [
            theme.palette.primary.light,
            theme.palette.info.main,
            theme.palette.error.main
        ],
        labels: ["Yotoqxonada", "Ijarada", 'O\u2018z uyida'],
        stroke: { colors: [theme.palette.background.paper] },
        legend: { floating: true, horizontalAlign: 'center' },
        dataLabels: { enabled: true, dropShadow: { enabled: false } },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: (seriesName) => `#${seriesName}`
                }
            }
        },
        plotOptions: {
            pie: { donut: { labels: { show: false } } }
        }
    });

    return (
        <Card>
            <CardHeader title="Talabalarning taqsimlanishi" />
            <ChartWrapperStyle dir="ltr">
                <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} height={280} />
            </ChartWrapperStyle>
        </Card>
    );
}
