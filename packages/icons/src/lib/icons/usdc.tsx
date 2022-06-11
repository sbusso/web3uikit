import { FC } from 'react';
import { TIconProps } from '../type';
const UsdcIcon: FC<TIconProps> = ({
    fill = 'currentColor',
    size = 18,
    style,
}) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        id="usdc"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={style}
    >
        <title>usdc icon</title>
        <path
            id="Path_1737"
            data-name="Path 1737"
            d="M12,24A12,12,0,1,0,0,12,11.971,11.971,0,0,0,12,24Z"
            fill={fill || '#2775CA'}
        />
        <path
            id="Path_1738"
            data-name="Path 1738"
            d="M723.4,516.17c0-1.759-1.055-2.362-3.166-2.613-1.508-.2-1.809-.6-1.809-1.307s.5-1.156,1.508-1.156a1.487,1.487,0,0,1,1.658,1.055.378.378,0,0,0,.352.251h.8a.344.344,0,0,0,.352-.352V512a2.511,2.511,0,0,0-2.262-2.061v-1.206c0-.2-.151-.352-.4-.4h-.754c-.2,0-.352.151-.4.4v1.156a2.563,2.563,0,0,0-2.463,2.463c0,1.659,1.005,2.312,3.116,2.563,1.407.251,1.859.553,1.859,1.357s-.7,1.357-1.658,1.357c-1.307,0-1.759-.553-1.91-1.307a.367.367,0,0,0-.352-.3h-.854a.344.344,0,0,0-.352.352v.05a2.807,2.807,0,0,0,2.664,2.412v1.206c0,.2.151.352.4.4h.754c.2,0,.352-.151.4-.4v-1.206A2.753,2.753,0,0,0,723.4,516.17Z"
            transform="translate(-708.087 -502.262)"
            fill="#fff"
        />
        <path
            id="Path_1739"
            data-name="Path 1739"
            d="M254.429,307.289a7.466,7.466,0,0,1,0-14.022.5.5,0,0,0,.3-.5v-.7a.379.379,0,0,0-.3-.4.3.3,0,0,0-.2.05,8.979,8.979,0,0,0,0,17.116.3.3,0,0,0,.449-.2c.05-.05.05-.1.05-.2v-.7A.665.665,0,0,0,254.429,307.289Zm5.291-15.569a.3.3,0,0,0-.449.2c-.05.05-.05.1-.05.2v.7a.662.662,0,0,0,.3.5,7.466,7.466,0,0,1,0,14.022.5.5,0,0,0-.3.5v.7a.379.379,0,0,0,.3.4.3.3,0,0,0,.2-.05,9.017,9.017,0,0,0,0-17.166Z"
            transform="translate(-244.975 -288.152)"
            fill="#fff"
        />
    </svg>
);
export default UsdcIcon;