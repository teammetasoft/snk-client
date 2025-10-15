import React, { useState } from 'react';
import { Select } from 'antd';

function LineChart({ title, data, timeframe = "Yearly" }) {
    const [selectedTimeframe, setSelectedTimeframe] = useState(timeframe);
    // Calculate dimensions and scales
    const width = 800;
    const height = 300;
    const padding = { top: 40, right: 40, bottom: 40, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Find min and max values for scaling
    const values = data.map(d => d.value);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const valueRange = maxValue - minValue;

    // Add some padding to the y-axis
    const yMax = maxValue + valueRange * 0.1;
    const yMin = Math.max(0, minValue - valueRange * 0.1);

    // Create y-axis labels (5 levels)
    const yAxisSteps = 5;
    const yAxisLabels = Array.from({ length: yAxisSteps }, (_, i) => {
        const value = yMin + ((yMax - yMin) / (yAxisSteps - 1)) * (yAxisSteps - 1 - i);
        return Math.round(value / 10) * 10; // Round to nearest 10
    });

    // Calculate points for the line
    const points = data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - ((d.value - yMin) / (yMax - yMin)) * chartHeight;
        return { x, y, label: d.label, value: d.value };
    });

    // Create path string for the line
    const pathD = points.map((p, i) => {
        return `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`;
    }).join(' ');

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <Select
                    value={selectedTimeframe}
                    onChange={setSelectedTimeframe}
                    style={{ width: 120 }}
                    options={[
                        { value: 'Monthly', label: 'Monthly' },
                        { value: 'Quarterly', label: 'Quarterly' },
                        { value: 'Yearly', label: 'Yearly' }
                    ]}
                />
            </div>

            {/* Chart */}
            <div className="overflow-x-auto">
                <svg width={width} height={height} className="mx-auto">
                    {/* Horizontal grid lines */}
                    {yAxisLabels.map((label, i) => {
                        const y = padding.top + (i / (yAxisSteps - 1)) * chartHeight;
                        return (
                            <g key={i}>
                                <line
                                    x1={padding.left}
                                    y1={y}
                                    x2={width - padding.right}
                                    y2={y}
                                    stroke="#f3f4f6"
                                    strokeWidth="1"
                                />
                                <text
                                    x={padding.left - 10}
                                    y={y}
                                    textAnchor="end"
                                    dominantBaseline="middle"
                                    className="text-xs fill-gray-500"
                                >
                                    {label >= 1000 ? `${label / 1000}k` : label}
                                </text>
                            </g>
                        );
                    })}

                    {/* Line path */}
                    <path
                        d={pathD}
                        fill="none"
                        stroke="#999999"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {points.map((point, i) => (
                        <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r="4"
                            fill="#3b82f6"
                            stroke="white"
                            strokeWidth="2"
                            className="cursor-pointer hover:r-6 transition-all"
                        >
                            <title>{`${point.label}: ${point.value}`}</title>
                        </circle>
                    ))}

                    {/* X-axis labels */}
                    {points.map((point, i) => (
                        <text
                            key={i}
                            x={point.x}
                            y={height - padding.bottom + 25}
                            textAnchor="middle"
                            className="text-xs fill-gray-500"
                        >
                            {point.label}
                        </text>
                    ))}
                </svg>
            </div>
        </div>
    );
}

export default LineChart;