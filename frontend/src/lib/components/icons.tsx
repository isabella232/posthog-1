// Loads custom icons (some icons may come from a third-party library)
import React, { CSSProperties } from 'react'

export function IconMenu(): JSX.Element {
    // FontAwesome
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.14286 8.40816H30.8571C31.4884 8.40816 32 7.96961 32 7.42857V4.97959C32 4.43855 31.4884 4 30.8571 4H1.14286C0.511643 4 0 4.43855 0 4.97959V7.42857C0 7.96961 0.511643 8.40816 1.14286 8.40816ZM1.14286 18.2041H30.8571C31.4884 18.2041 32 17.7655 32 17.2245V14.7755C32 14.2345 31.4884 13.7959 30.8571 13.7959H1.14286C0.511643 13.7959 0 14.2345 0 14.7755V17.2245C0 17.7655 0.511643 18.2041 1.14286 18.2041ZM1.14286 28H30.8571C31.4884 28 32 27.5614 32 27.0204V24.5714C32 24.0304 31.4884 23.5918 30.8571 23.5918H1.14286C0.511643 23.5918 0 24.0304 0 24.5714V27.0204C0 27.5614 0.511643 28 1.14286 28Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconBuilding(): JSX.Element {
    // FontAwesome
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25.8139 26.8571H24.8592V5.14286C24.8592 4.51167 24.3462 4 23.7134 4H7.67335C7.04058 4 6.52763 4.51167 6.52763 5.14286V26.8571H5.57286C5.2565 26.8571 5 27.113 5 27.4286V28.381H26.3868V27.4286C26.3868 27.113 26.1303 26.8571 25.8139 26.8571ZM11.1105 7.61905C11.1105 7.30348 11.367 7.04762 11.6834 7.04762H13.5929C13.9093 7.04762 14.1658 7.30348 14.1658 7.61905V9.52381C14.1658 9.83938 13.9093 10.0952 13.5929 10.0952H11.6834C11.367 10.0952 11.1105 9.83938 11.1105 9.52381V7.61905ZM11.1105 12.1905C11.1105 11.8749 11.367 11.619 11.6834 11.619H13.5929C13.9093 11.619 14.1658 11.8749 14.1658 12.1905V14.0952C14.1658 14.4108 13.9093 14.6667 13.5929 14.6667H11.6834C11.367 14.6667 11.1105 14.4108 11.1105 14.0952V12.1905ZM13.5929 19.2381H11.6834C11.367 19.2381 11.1105 18.9822 11.1105 18.6667V16.7619C11.1105 16.4463 11.367 16.1905 11.6834 16.1905H13.5929C13.9093 16.1905 14.1658 16.4463 14.1658 16.7619V18.6667C14.1658 18.9822 13.9093 19.2381 13.5929 19.2381ZM17.221 26.8571H14.1658V22.8571C14.1658 22.5416 14.4223 22.2857 14.7386 22.2857H16.6482C16.9645 22.2857 17.221 22.5416 17.221 22.8571V26.8571ZM20.2763 18.6667C20.2763 18.9822 20.0198 19.2381 19.7034 19.2381H17.7939C17.4775 19.2381 17.221 18.9822 17.221 18.6667V16.7619C17.221 16.4463 17.4775 16.1905 17.7939 16.1905H19.7034C20.0198 16.1905 20.2763 16.4463 20.2763 16.7619V18.6667ZM20.2763 14.0952C20.2763 14.4108 20.0198 14.6667 19.7034 14.6667H17.7939C17.4775 14.6667 17.221 14.4108 17.221 14.0952V12.1905C17.221 11.8749 17.4775 11.619 17.7939 11.619H19.7034C20.0198 11.619 20.2763 11.8749 20.2763 12.1905V14.0952ZM20.2763 9.52381C20.2763 9.83938 20.0198 10.0952 19.7034 10.0952H17.7939C17.4775 10.0952 17.221 9.83938 17.221 9.52381V7.61905C17.221 7.30348 17.4775 7.04762 17.7939 7.04762H19.7034C20.0198 7.04762 20.2763 7.30348 20.2763 7.61905V9.52381Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconDashboard(): JSX.Element {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.6726 18.5624C31.2102 16.3631 30.3324 14.2723 29.0863 12.4022C26.3949 8.3274 21.0237 4.84566 15.8108 5.00528C13.271 5.07227 10.7822 5.7334 8.54393 6.93568C6.30568 8.13796 4.38026 9.84794 2.92204 11.9285C2.36383 12.7274 1.88981 13.582 1.50755 14.4785C0.841221 16.0392 0.394454 17.6848 0.179998 19.3682C0.0516043 20.2651 -0.00826326 21.1705 0.000915249 22.0765C0.00256283 22.1096 0.00646498 22.1426 0.0125946 22.1752C0.0242922 22.4486 0.141057 22.7071 0.338562 22.8966C0.536068 23.0861 0.799084 23.1921 1.07282 23.1926H5.06195C5.23844 23.3223 11.5167 23.3223 11.5167 23.3223C11.6157 23.6322 11.734 23.9356 11.871 24.2307C12.1081 24.7376 12.4337 25.1982 12.8326 25.5907C13.1587 25.8948 13.5367 26.1378 13.9486 26.3083C14.3644 26.4785 14.8007 26.5937 15.2463 26.6509C15.461 26.6844 15.6778 26.7031 15.8952 26.7067H15.9068C16.1293 26.695 16.3508 26.669 16.57 26.6289C17.0309 26.5516 17.4806 26.4183 17.9092 26.2318C18.3029 26.0638 18.6684 25.8362 18.9928 25.557C19.3909 25.1979 19.7272 24.7757 19.9881 24.3073C20.1563 24.0009 20.3037 23.6836 20.4293 23.3574L26.0886 23.2795C26.2417 23.2795 30.9199 23.1913 30.9199 23.1913C31.1816 23.1916 31.4341 23.0945 31.6282 22.9189C31.8222 22.7433 31.944 22.5018 31.9698 22.2413C31.9698 22.1972 31.9866 22.1233 31.9918 22.0311C32.0318 20.866 31.9246 19.7006 31.6726 18.5624V18.5624ZM15.8497 25.0898C15.2722 25.0898 14.7077 24.9186 14.2276 24.5977C13.7474 24.2769 13.3732 23.8209 13.1522 23.2873C12.9312 22.7538 12.8734 22.1667 12.986 21.6003C13.0987 21.034 13.3768 20.5137 13.7851 20.1053C14.1935 19.697 14.7137 19.4189 15.2801 19.3062C15.8465 19.1936 16.4336 19.2514 16.9671 19.4724C17.5006 19.6934 17.9567 20.0676 18.2775 20.5478C18.5983 21.028 18.7696 21.5925 18.7696 22.17C18.7696 22.9444 18.4619 23.687 17.9144 24.2346C17.3668 24.7822 16.6241 25.0898 15.8497 25.0898V25.0898ZM26.9749 21.0669C26.9373 20.8256 26.9321 20.6971 26.875 20.4038C26.6339 19.1142 26.2599 17.853 25.759 16.6405C25.5294 16.0816 25.2632 15.5384 24.9622 15.0144C24.7027 14.5771 24.4301 14.1632 24.1446 13.7661C23.4906 12.845 22.732 12.0028 21.884 11.2563C21.5385 10.947 21.1688 10.6658 20.7784 10.4154C20.6591 10.3429 20.5267 10.2946 20.3887 10.2732C20.2508 10.2519 20.11 10.2579 19.9743 10.291C19.8387 10.3241 19.7109 10.3836 19.5983 10.466C19.4857 10.5485 19.3904 10.6523 19.3178 10.7716C19.2453 10.8909 19.197 11.0233 19.1757 11.1613C19.1543 11.2992 19.1604 11.44 19.1935 11.5757C19.2265 11.7113 19.286 11.8391 19.3685 11.9517C19.4509 12.0644 19.5548 12.1597 19.6741 12.2322V12.2322C19.6987 12.2477 19.7584 12.2906 19.8609 12.3619C20.0452 12.4917 20.2502 12.6617 20.4799 12.859C21.2101 13.4996 21.8634 14.2229 22.4265 15.0144C22.6743 15.3583 22.9118 15.7282 23.135 16.1084C23.3887 16.5449 23.6137 16.9975 23.8085 17.4632C24.2536 18.5428 24.5871 19.6651 24.8039 20.8126C24.822 20.9047 24.8324 20.9774 24.848 21.0721H20.2451C20.2112 20.859 20.1635 20.6483 20.1023 20.4414C19.9598 20.0343 19.7506 19.6536 19.4833 19.315C19.3654 19.1675 19.2352 19.0303 19.094 18.905C18.7536 18.6179 18.3874 18.3629 18 18.1432C17.7184 17.9758 17.4238 17.8175 17.1267 17.667L16.9502 9.75097C16.9203 8.36114 14.8453 8.37152 14.8284 9.76265L14.7285 17.6657C14.4288 17.8175 14.1277 17.9745 13.8448 18.1419C13.4753 18.3519 13.1237 18.5919 12.7937 18.8595C12.6056 19.0134 12.435 19.1875 12.285 19.3786C12.042 19.7078 11.852 20.073 11.7218 20.4609C11.6662 20.661 11.6229 20.8642 11.592 21.0695H6.92026C6.91837 21.0358 6.92232 21.002 6.93194 20.9696C7.14443 19.8577 7.47057 18.7706 7.90521 17.7253C8.10491 17.2492 8.33732 16.7874 8.60078 16.3433C8.8162 15.9825 9.0381 15.6425 9.27429 15.3155C9.83518 14.5398 10.4855 13.8329 11.2118 13.2093C11.4376 13.016 11.6478 12.8525 11.8308 12.7227C11.8947 12.6754 11.9614 12.6321 12.0306 12.5929C12.2806 12.4656 12.4703 12.2447 12.5582 11.9783C12.6462 11.7119 12.6254 11.4215 12.5003 11.1703C12.3753 10.9192 12.1561 10.7276 11.8904 10.6372C11.6248 10.5469 11.3342 10.5651 11.082 10.6879C11.0308 10.7133 10.9817 10.7428 10.9353 10.7762C10.5499 11.0197 10.1841 11.293 9.84138 11.5937C8.989 12.3243 8.22469 13.1518 7.56392 14.0593C7.2901 14.4383 7.02797 14.838 6.7853 15.2532C6.47142 15.7789 6.19435 16.3257 5.95607 16.8896C5.46605 18.0721 5.09903 19.3019 4.86081 20.5595C4.81668 20.7853 4.81668 20.8736 4.78424 21.0682H2.15899C2.18235 20.6192 2.2135 20.1443 2.28098 19.6408C2.46919 18.1496 2.86221 16.6915 3.44891 15.3077C3.7747 14.5495 4.17829 13.8272 4.65317 13.1522C5.92221 11.3409 7.59831 9.85239 9.54688 8.80621C11.4954 7.76003 13.6622 7.18535 15.8731 7.12832C20.2632 6.98947 24.9933 10.0572 27.3136 13.5727C28.4118 15.2171 29.1861 17.056 29.595 18.9906C29.7391 19.6743 29.8259 20.3688 29.8545 21.0669H26.9749Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconPerson(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7494 5.57092e-05C17.4202 0.00612104 19.0518 0.507136 20.438 1.43983C21.8243 2.37253 22.9031 3.69508 23.5382 5.24048C24.1733 6.78587 24.3362 8.48481 24.0064 10.1227C23.6766 11.7607 22.8688 13.2642 21.6851 14.4433C20.5014 15.6225 18.9949 16.4245 17.3557 16.748C15.7165 17.0715 14.0182 16.9021 12.4752 16.261C10.9323 15.62 9.61386 14.5362 8.68649 13.1463C7.75912 11.7565 7.26436 10.1231 7.26471 8.45225C7.26494 7.33962 7.4848 6.23798 7.91168 5.2105C8.33855 4.18301 8.96405 3.2499 9.75231 2.46466C10.5406 1.67942 11.4761 1.05751 12.5052 0.634577C13.5343 0.211645 14.6368 -0.00398333 15.7494 5.57092e-05V5.57092e-05Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.67 20.3705C20.5568 20.1755 21.918 18.076 24.8245 18.845C28.2725 19.7603 29.9117 20.616 30.5309 23.2986C30.993 25.3006 30.7457 26.5336 29.8792 28.6331C29.0126 30.7326 27.0756 31.6876 27.0756 31.6876L4.82223 31.9999C4.82223 31.9999 2.65593 30.4546 1.80204 28.523C0.948154 26.5914 1.42655 24.2897 1.42655 24.2897C1.42655 24.2897 1.67748 20.7153 5.27716 19.6213C8.87683 18.5273 10.7832 20.5709 15.67 20.3705Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconFunnel(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M31.9124 2.69581L21.5138 14.7815C20.9719 15.4116 20.6744 16.2105 20.6743 17.0361V29.1452C20.6743 29.4268 20.5616 29.6971 20.3606 29.8974C20.1597 30.0977 19.8866 30.212 19.6007 30.2154L18.112 30.2338C17.514 30.2408 16.9355 30.024 16.4936 29.6271L11.7499 25.3637C11.5615 25.1944 11.4124 24.987 11.3129 24.7558C11.2134 24.5245 11.1657 24.2748 11.1732 24.0238L11.4441 15.0495C11.4513 14.8108 11.4099 14.573 11.3223 14.3502C11.2347 14.1275 11.1027 13.9243 10.9341 13.7526L0.124139 2.73761C0.0637419 2.67607 0.0231152 2.59835 0.00734023 2.51418C-0.00843475 2.43001 0.00134364 2.34313 0.0354514 2.2644C0.0695592 2.18568 0.12648 2.11861 0.199097 2.07158C0.271714 2.02455 0.356801 1.99965 0.443713 2L31.6328 2.09835C31.703 2.09854 31.7717 2.11849 31.8307 2.15585C31.8898 2.19321 31.9368 2.24642 31.9662 2.3092C31.9956 2.37199 32.0061 2.44175 31.9966 2.51024C31.9871 2.57874 31.9578 2.64313 31.9124 2.69581V2.69581Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconInsights(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.3299 3C2.94783 3 3.54045 3.24405 3.97739 3.67846C4.41433 4.11288 4.65981 4.70207 4.65981 5.31642V23.5568C4.65981 23.7047 4.7189 23.8465 4.8241 23.9511C4.9293 24.0557 5.07197 24.1145 5.22074 24.1145H29.6425C30.2677 24.1145 30.8674 24.3614 31.3095 24.801C31.7516 25.2405 32 25.8367 32 26.4584V26.561C32 27.1827 31.7516 27.7788 31.3095 28.2184C30.8674 28.658 30.2677 28.9049 29.6425 28.9049H3.59647C2.64263 28.9049 1.72785 28.5282 1.05338 27.8576C0.378912 27.1871 0 26.2776 0 25.3293V5.31642C0 4.70207 0.245474 4.11288 0.682415 3.67846C1.11936 3.24405 1.71197 3 2.3299 3V3Z"
                fill="currentColor"
            />
            <path
                d="M7.56863 18.1311L12.0439 13.0456C12.2866 12.7699 12.5881 12.5516 12.9265 12.4065C13.2649 12.2615 13.6316 12.1933 13.9998 12.2071C14.368 12.2209 14.7285 12.3163 15.0549 12.4862C15.3814 12.6562 15.6656 12.8964 15.8867 13.1895L18.1434 16.18C18.2147 16.2742 18.306 16.3516 18.4109 16.4068C18.5157 16.4619 18.6315 16.4934 18.75 16.4989C18.8684 16.5045 18.9867 16.484 19.0963 16.4389C19.2059 16.3939 19.3041 16.3253 19.384 16.2381L28.0695 6.73809C28.2042 6.59104 28.3675 6.47267 28.5496 6.39014C28.7316 6.30762 28.9286 6.26266 29.1286 6.25798C29.3286 6.25329 29.5275 6.28898 29.7132 6.36289C29.8989 6.4368 30.0677 6.5474 30.2092 6.68798V6.68798C30.4749 6.95214 30.6294 7.30699 30.6414 7.68039C30.6533 8.05379 30.5217 8.41769 30.2734 8.69808L21.0188 19.1535C20.7645 19.4409 20.4516 19.6712 20.1009 19.8293C19.7502 19.9873 19.3697 20.0694 18.9846 20.0702C18.5996 20.071 18.2188 19.9903 17.8675 19.8337C17.5161 19.677 17.2023 19.4479 16.9468 19.1616L14.5844 16.5162C14.5166 16.4402 14.4339 16.3789 14.3413 16.3361C14.2487 16.2933 14.1482 16.2698 14.0461 16.2673C13.944 16.2647 13.8425 16.283 13.7478 16.3211C13.6531 16.3592 13.5674 16.4163 13.4958 16.4887L9.8018 20.2204C9.65184 20.3723 9.47048 20.4901 9.27025 20.5655C9.07002 20.641 8.8557 20.6723 8.6421 20.6573C8.4285 20.6423 8.22073 20.5814 8.03315 20.4787C7.84556 20.3761 7.68263 20.2341 7.55563 20.0627L7.48815 19.9714C7.28838 19.7015 7.18744 19.3719 7.20208 19.0371C7.21672 18.7024 7.34606 18.3827 7.56863 18.1311V18.1311Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconEvents(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.71521 26.4136L10.2256 23.7896L16.4019 27.0077L22.7809 23.5668L27.5971 26.3311L16.7657 32L5.71521 26.4136Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.32666 19.936L9.72538 17.378L15.9969 20.3858L22.3882 17.0851L27.2086 19.8494L16.3524 25.5224L5.32666 19.936Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 13.3634L9.98573 10.4754L16.0092 13.3882L21.7308 10.4547L26.8819 13.2933L16.0422 18.9622L5 13.3634Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.03308 6.36616L15.9802 0L26.915 6.28364L16.0753 11.9525L5.03308 6.36616Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconActions(): JSX.Element {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M30.803 14.6555H27.7336C27.1042 9.10778 22.6342 4.72775 17.0465 4.23671V1.19932C17.0465 0.882019 16.9204 0.577712 16.6961 0.353344C16.4717 0.128977 16.1674 0.00292969 15.8501 0.00292969C15.5328 0.00292969 15.2285 0.128977 15.0041 0.353344C14.7798 0.577712 14.6537 0.882019 14.6537 1.19932V4.26821C12.0035 4.57282 9.5344 5.76528 7.6481 7.65159C5.76179 9.53789 4.56933 12.007 4.26472 14.6572H1.19639C1.03928 14.6572 0.883706 14.6881 0.738553 14.7483C0.5934 14.8084 0.461512 14.8965 0.350417 15.0076C0.239321 15.1187 0.151194 15.2506 0.0910699 15.3958C0.0309455 15.5409 0 15.6965 0 15.8536C0 16.0107 0.0309455 16.1663 0.0910699 16.3114C0.151194 16.4566 0.239321 16.5885 0.350417 16.6996C0.461512 16.8107 0.5934 16.8988 0.738553 16.9589C0.883706 17.019 1.03928 17.05 1.19639 17.05H4.23378C4.47502 19.7584 5.64328 22.3006 7.54138 24.2476C9.43949 26.1946 11.9512 27.4271 14.6526 27.7371V30.8065C14.6526 31.1238 14.7786 31.4281 15.003 31.6525C15.2274 31.8769 15.5317 32.0029 15.849 32.0029C16.1663 32.0029 16.4706 31.8769 16.695 31.6525C16.9193 31.4281 17.0454 31.1238 17.0454 30.8065V27.7691C19.8061 27.5238 22.3927 26.3155 24.3525 24.3556C26.3123 22.3957 27.5205 19.8091 27.7657 17.0483H30.803C31.1204 17.0483 31.4247 16.9222 31.649 16.6979C31.8734 16.4735 31.9994 16.1692 31.9994 15.8519C31.9994 15.5346 31.8734 15.2303 31.649 15.0059C31.4247 14.7816 31.1204 14.6555 30.803 14.6555ZM15.2842 24.7953C11.0094 24.4578 7.54285 20.9935 7.20592 16.717C7.1024 15.4418 7.27737 14.1594 7.71871 12.9586C8.16005 11.7578 8.85721 10.6673 9.76187 9.7627C10.6665 8.85809 11.7571 8.161 12.9579 7.71973C14.1587 7.27846 15.4412 7.10356 16.7163 7.20716C20.9912 7.54465 24.4572 11.009 24.7946 15.2855C24.8981 16.5606 24.723 17.843 24.2817 19.0438C23.8403 20.2445 23.1431 21.335 22.2385 22.2396C21.3338 23.1442 20.2433 23.8412 19.0426 24.2826C17.8418 24.7239 16.5594 24.8988 15.2842 24.7953Z"
                    fill="currentColor"
                />
                <path
                    d="M12.2199 15.259C12.4466 15.2588 12.664 15.1687 12.8243 15.0084C12.9846 14.8481 13.0747 14.6307 13.0749 14.404V12.7728H14.3972C14.5095 12.7728 14.6207 12.7507 14.7244 12.7077C14.8282 12.6648 14.9224 12.6018 15.0018 12.5224C15.0812 12.443 15.1442 12.3487 15.1871 12.245C15.2301 12.1413 15.2522 12.0301 15.2522 11.9178C15.2522 11.8056 15.2301 11.6944 15.1871 11.5907C15.1442 11.4869 15.0812 11.3927 15.0018 11.3133C14.9224 11.2339 14.8282 11.1709 14.7244 11.1279C14.6207 11.085 14.5095 11.0629 14.3972 11.0629H11.8475C11.7189 11.0629 11.5956 11.1139 11.5047 11.2049C11.4138 11.2958 11.3627 11.4191 11.3627 11.5477V14.4012C11.3623 14.5139 11.3842 14.6255 11.4272 14.7297C11.4701 14.8339 11.5332 14.9286 11.6129 15.0083C11.6926 15.0881 11.7872 15.1512 11.8914 15.1943C11.9955 15.2373 12.1072 15.2593 12.2199 15.259Z"
                    fill="currentColor"
                />
                <path
                    d="M20.6025 11.218H17.749C17.526 11.2237 17.314 11.3164 17.1583 11.4761C17.0026 11.6359 16.9154 11.8502 16.9154 12.0733C16.9154 12.2964 17.0026 12.5107 17.1583 12.6704C17.314 12.8302 17.526 12.9228 17.749 12.9285H19.3802V14.2509C19.3802 14.4777 19.4703 14.6951 19.6306 14.8555C19.7909 15.0158 20.0084 15.1059 20.2352 15.1059C20.4619 15.1059 20.6794 15.0158 20.8397 14.8555C21.0001 14.6951 21.0901 14.4777 21.0901 14.2509V11.7034C21.0901 11.6395 21.0775 11.5762 21.053 11.5172C21.0284 11.4581 20.9925 11.4045 20.9472 11.3594C20.9018 11.3143 20.8481 11.2786 20.7889 11.2543C20.7298 11.2301 20.6664 11.2177 20.6025 11.218Z"
                    fill="currentColor"
                />
                <path
                    d="M20.2323 16.7478C20.0056 16.748 19.7882 16.8381 19.6279 16.9984C19.4676 17.1587 19.3775 17.3761 19.3773 17.6028V19.2312H18.0549C17.8282 19.2312 17.6107 19.3212 17.4504 19.4816C17.29 19.6419 17.2 19.8594 17.2 20.0861C17.2 20.3129 17.29 20.5303 17.4504 20.6907C17.6107 20.851 17.8282 20.9411 18.0549 20.9411H20.6024C20.731 20.9411 20.8543 20.89 20.9452 20.7991C21.0362 20.7082 21.0872 20.5848 21.0872 20.4562V17.6056C21.0876 17.4931 21.0658 17.3816 21.023 17.2775C20.9802 17.1735 20.9173 17.0789 20.8378 16.9992C20.7584 16.9195 20.664 16.8563 20.5601 16.8132C20.4562 16.77 20.3448 16.7478 20.2323 16.7478Z"
                    fill="currentColor"
                />
                <path
                    d="M14.7032 19.0781H13.0748V17.7557C13.0748 17.529 12.9847 17.3115 12.8244 17.1512C12.6641 16.9908 12.4466 16.9008 12.2198 16.9008C11.9931 16.9008 11.7756 16.9908 11.6153 17.1512C11.4549 17.3115 11.3649 17.529 11.3649 17.7557V20.3054C11.3649 20.4341 11.4159 20.5575 11.5068 20.6485C11.5978 20.7395 11.7211 20.7907 11.8497 20.7909H14.7032C14.9262 20.7851 15.1382 20.6925 15.2939 20.5328C15.4496 20.373 15.5368 20.1587 15.5368 19.9356C15.5368 19.7125 15.4496 19.4982 15.2939 19.3385C15.1382 19.1787 14.9262 19.0861 14.7032 19.0804V19.0781Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function IconCohorts(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8621 6.00002C16.9043 6.00392 17.922 6.31683 18.7867 6.89928C19.6513 7.48173 20.3243 8.3076 20.7204 9.27259C21.1165 10.2376 21.2182 11.2984 21.0125 12.3212C20.8068 13.3439 20.3029 14.2828 19.5646 15.0191C18.8263 15.7554 17.8865 16.2563 16.8641 16.4584C15.8416 16.6605 14.7822 16.5548 13.8197 16.1547C12.8572 15.7545 12.0347 15.0779 11.4561 14.2101C10.8774 13.3424 10.5686 12.3225 10.5686 11.2792C10.5692 10.5845 10.7068 9.89667 10.9733 9.25517C11.2398 8.61367 11.63 8.03109 12.1217 7.54074C12.6133 7.05039 13.1968 6.66189 13.8386 6.39751C14.4805 6.13314 15.1681 5.99808 15.8621 6.00002V6.00002Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8129 18.7273C18.8609 18.6041 19.7128 17.2929 21.5249 17.776C23.6768 18.3478 24.701 18.8801 25.0851 20.556C25.3756 21.8081 25.2181 22.577 24.6764 23.8882C24.3196 24.7011 23.7029 25.3722 22.9234 25.7958L9.03719 25.9881C8.25527 25.4193 7.61359 24.6791 7.16111 23.8241C6.8441 22.9813 6.76234 22.0679 6.9247 21.1821C6.99798 20.5143 7.26441 19.8825 7.69127 19.3641C8.11814 18.8457 8.68686 18.4634 9.3277 18.264C11.5731 17.5788 12.7648 18.8505 15.8129 18.7273Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.57557 8.50412C6.22933 8.49924 6.86982 8.68887 7.41571 9.049C7.9616 9.40913 8.3883 9.9235 8.64164 10.5268C8.89499 11.1301 8.96353 11.7952 8.83862 12.4376C8.71372 13.08 8.40101 13.6707 7.94011 14.1349C7.47921 14.599 6.89091 14.9156 6.24994 15.0445C5.60897 15.1734 4.94422 15.1087 4.34002 14.8588C3.73582 14.6088 3.21942 14.1847 2.85639 13.6405C2.49337 13.0962 2.30008 12.4562 2.30104 11.8018C2.29974 11.37 2.38339 10.9422 2.54725 10.5428C2.71111 10.1434 2.95199 9.78027 3.25606 9.47405C3.56014 9.16784 3.92147 8.92456 4.31946 8.75813C4.71745 8.59171 5.14425 8.50541 5.57557 8.50412V8.50412Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5459 16.4698C7.43186 16.3909 7.95384 15.5727 9.07655 15.8733C10.4061 16.2282 10.7311 17.0909 10.5883 17.3521C10.4454 17.6134 9.23902 17.0909 7.93411 17.9239C6.6292 18.757 6.04817 20.9455 6.04817 20.9455L1.35541 21.0096C0.870748 20.6514 0.473445 20.188 0.193314 19.6541C-0.000287678 19.1279 -0.0496151 18.5594 0.0504934 18.0077C0.0934812 17.593 0.256033 17.1998 0.518327 16.876C0.780621 16.5522 1.13133 16.3117 1.52775 16.1839C2.92621 15.7403 3.65993 16.5339 5.5459 16.4698Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.4046 8.40549C25.7511 8.40061 25.1108 8.59013 24.5651 8.95004C24.0193 9.30995 23.5925 9.82404 23.3391 10.4271C23.0856 11.0301 23.0167 11.6949 23.1412 12.3371C23.2657 12.9794 23.578 13.5701 24.0384 14.0345C24.4988 14.4988 25.0866 14.8158 25.7273 14.9453C26.3679 15.0747 27.0325 15.0108 27.6368 14.7615C28.2411 14.5123 28.7579 14.089 29.1215 13.5454C29.4851 13.0018 29.6792 12.3623 29.6792 11.7081C29.6819 10.8356 29.3385 9.99782 28.7245 9.37861C28.1106 8.75939 27.2762 8.4094 26.4046 8.40549Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.454 16.3611C24.568 16.2823 24.0461 15.464 22.9234 15.7647C21.5938 16.1196 21.2688 16.9822 21.4116 17.2435C21.5544 17.5047 22.7608 16.9822 24.0658 17.8152C25.3707 18.6483 25.9517 20.8369 25.9517 20.8369L30.6445 20.901C31.1281 20.5437 31.5252 20.0821 31.8066 19.5504C32.0003 19.0225 32.0497 18.4524 31.9494 17.8991C31.9064 17.4844 31.7438 17.0912 31.4815 16.7674C31.2192 16.4435 30.8685 16.2031 30.4721 16.0752C29.0736 15.6415 28.3399 16.4351 26.454 16.3611Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconFeatureFlags(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7966 4.94566V27.2117C17.7966 27.3692 17.7338 27.5203 17.6222 27.6316C17.5105 27.743 17.359 27.8055 17.2011 27.8055H16.044C15.886 27.8055 15.7346 27.743 15.6229 27.6316C15.5112 27.5203 15.4485 27.3692 15.4485 27.2117V4.94566C15.4485 4.78818 15.5112 4.63716 15.6229 4.52581C15.7346 4.41445 15.886 4.35189 16.044 4.35189H17.1909C17.27 4.35055 17.3485 4.36491 17.4219 4.39415C17.4954 4.42338 17.5622 4.46691 17.6186 4.52218C17.6749 4.57745 17.7197 4.64336 17.7503 4.71607C17.7808 4.78877 17.7966 4.86683 17.7966 4.94566V4.94566Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.9999 5.39089V13.0322C31.9999 13.1897 31.9372 13.3407 31.8255 13.4521C31.7138 13.5634 31.5624 13.626 31.4044 13.626C30.1847 14.1702 28.8506 14.411 27.5169 14.3277C25.4328 14.1489 25.0504 13.0828 23.0746 12.9074C21.8775 12.8073 20.6772 13.057 19.6201 13.626C19.4622 13.626 19.3107 13.5634 19.199 13.4521C19.0874 13.3407 19.0247 13.1897 19.0247 13.0322V5.39089C19.0247 5.23341 19.0874 5.08239 19.199 4.97104C19.3107 4.85968 19.4622 4.79714 19.6201 4.79714C20.6728 4.19645 21.8822 3.92494 23.0914 4.01783C25.1215 4.17302 25.5952 5.22897 27.6726 5.42464C28.9463 5.53018 30.2262 5.31439 31.3943 4.79714C31.4733 4.7958 31.5518 4.81016 31.6253 4.8394C31.6987 4.86863 31.7655 4.91216 31.8219 4.96743C31.8783 5.0227 31.9231 5.08861 31.9536 5.16132C31.9842 5.23403 31.9999 5.31206 31.9999 5.39089V5.39089Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.83557 12.6881V27.4309C9.83557 27.6502 10.0724 27.8257 10.3634 27.8257H11.3784C11.6693 27.8257 11.9062 27.6502 11.9062 27.4309V12.6881C11.9062 12.4722 11.6693 12.2968 11.3784 12.2968H10.3634C10.0724 12.2968 9.83557 12.4722 9.83557 12.6881Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.23195e-09 13.7475V18.8079C-1.92157e-06 18.8596 0.0102563 18.9108 0.0301911 18.9585C0.0501259 19.0062 0.0793763 19.0495 0.11618 19.0859C0.152983 19.1222 0.196618 19.151 0.244626 19.1705C0.292634 19.1899 0.344046 19.1997 0.39587 19.1993C1.20303 19.5621 2.0871 19.7219 2.97062 19.6648C4.35104 19.5468 4.60482 18.8417 5.91418 18.7236C6.70774 18.6584 7.50324 18.8236 8.2047 19.1993C8.3091 19.1993 8.4093 19.1582 8.48344 19.0849C8.55758 19.0116 8.59968 18.912 8.60057 18.8079V13.7475C8.60057 13.6428 8.55887 13.5424 8.48464 13.4684C8.4104 13.3943 8.30969 13.3528 8.2047 13.3528C7.50673 12.9554 6.70542 12.7756 5.90402 12.8366C4.57097 12.9412 4.24617 13.6395 2.85898 13.7677C2.0137 13.8411 1.16358 13.6983 0.389097 13.3528C0.285287 13.3545 0.186317 13.3969 0.113537 13.4707C0.0407565 13.5446 -1.5166e-05 13.6439 4.23195e-09 13.7475V13.7475Z"
                fill="currentColor"
            />
        </svg>
    )
}

export function IconToolbar(): JSX.Element {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M8.20602 17.3738C8.09702 12.716 7.98767 8.05763 7.87798 3.39876C7.68072 2.97529 7.36725 2.61706 6.97433 2.36609C6.58141 2.11512 6.12533 1.98181 5.6596 1.98181C5.19387 1.98181 4.7378 2.11512 4.34488 2.36609C3.95196 2.61706 3.63849 2.97529 3.44123 3.39876V17.6563C3.01799 17.8184 1.60081 18.4218 0.70208 19.9934C0.179427 20.9157 -0.0603206 21.9724 0.0128946 23.031C-0.0329244 24.0296 0.20617 25.0205 0.70208 25.8874C1.62979 27.4922 3.12406 28.065 3.53798 28.2078V21.9201C3.53798 21.8762 3.5466 21.8328 3.56336 21.7922C3.58011 21.7517 3.60466 21.7148 3.63561 21.6838C3.66656 21.6528 3.70329 21.6282 3.74372 21.6115C3.78414 21.5947 3.82746 21.5861 3.87119 21.5862H6.57308C6.66132 21.5862 6.74594 21.6214 6.80833 21.684C6.87072 21.7466 6.90577 21.8316 6.90577 21.9201V28.5823C7.30676 28.5465 9.34586 28.3226 10.8163 26.5433C11.9996 25.1105 12.1021 23.5311 12.1145 23.0315C12.1407 21.7953 11.7768 20.5823 11.0748 19.5662C10.3728 18.55 9.36868 17.7826 8.20602 17.3738V17.3738Z"
                    fill="currentColor"
                />
                <path
                    d="M17.7046 1.01401C14.1086 1.24045 11.2287 4.2568 11.1444 7.87247C11.1076 9.4535 11.6025 11.0009 12.5492 12.265C13.4959 13.5292 14.8391 14.4365 16.3624 14.8405V26.3798C16.3624 26.8575 16.5514 27.3156 16.888 27.6534C17.2245 27.9912 17.6809 28.1809 18.1568 28.1809C18.6327 28.1809 19.0891 27.9912 19.4256 27.6534C19.7621 27.3156 19.9511 26.8575 19.9511 26.3798V14.8405C21.6352 14.3933 23.0932 13.3329 24.041 11.8657C24.9887 10.3986 25.3584 8.62986 25.078 6.9041C24.7976 5.17833 23.8872 3.61914 22.5241 2.53029C21.161 1.44144 19.4429 0.900915 17.7046 1.01401V1.01401ZM18.3218 12.7891C17.4184 12.7891 16.5353 12.5202 15.7842 12.0164C15.033 11.5127 14.4476 10.7966 14.1018 9.95885C13.7561 9.12109 13.6657 8.19925 13.8419 7.30989C14.0182 6.42053 14.4532 5.6036 15.092 4.96241C15.7308 4.32122 16.5447 3.88456 17.4307 3.70766C18.3167 3.53075 19.2352 3.62155 20.0698 3.96856C20.9044 4.31557 21.6178 4.90321 22.1197 5.65717C22.6216 6.41113 22.8895 7.29755 22.8895 8.20434C22.8895 8.80644 22.7714 9.40265 22.5419 9.95893C22.3124 10.5152 21.9759 11.0207 21.5518 11.4464C21.1276 11.8722 20.6241 12.2099 20.0699 12.4402C19.5157 12.6706 18.9217 12.7892 18.3218 12.7891V12.7891Z"
                    fill="currentColor"
                />
                <path
                    d="M20.6978 6.74088L19.6252 6.89668V5.81281C19.6252 5.67064 19.5925 5.53039 19.5297 5.40296C19.4669 5.27553 19.3756 5.16436 19.2631 5.07809C19.1505 4.99181 19.0196 4.93277 18.8806 4.90554C18.7416 4.87831 18.5982 4.88363 18.4615 4.92109L16.5585 5.44044C16.4938 5.45858 16.4332 5.48935 16.3803 5.53098C16.3274 5.57261 16.2832 5.6243 16.2502 5.68308C16.2171 5.74187 16.196 5.80661 16.1879 5.8736C16.1798 5.94059 16.185 6.00852 16.2031 6.07352C16.2211 6.13851 16.2518 6.1993 16.2933 6.25241C16.3347 6.30551 16.3862 6.3499 16.4448 6.38303C16.5034 6.41616 16.5679 6.43739 16.6346 6.4455C16.7013 6.45361 16.769 6.44845 16.8338 6.43031L18.4807 5.95822C18.4998 5.95276 18.5199 5.95189 18.5395 5.95568C18.559 5.95947 18.5774 5.96782 18.5931 5.98006C18.6088 5.99229 18.6214 6.00807 18.6299 6.02611C18.6384 6.04415 18.6426 6.06395 18.6421 6.08391L18.6168 7.05612C18.6135 7.19713 18.6409 7.33715 18.6969 7.46651C18.7529 7.59586 18.8363 7.71146 18.9412 7.8053C19.0461 7.89914 19.1701 7.96899 19.3045 8.01001C19.4389 8.05103 19.5807 8.06224 19.7199 8.04287L20.8142 7.88967C20.8277 7.88785 20.8414 7.8892 20.8544 7.89361C20.8673 7.89801 20.879 7.90535 20.8886 7.91506C20.8982 7.92476 20.9055 7.93657 20.9098 7.94955C20.9141 7.96253 20.9154 7.97634 20.9135 7.9899L20.6921 9.54793C20.6849 9.6089 20.6897 9.6707 20.7063 9.7298C20.7229 9.7889 20.7509 9.84414 20.7888 9.89236C20.8266 9.94059 20.8736 9.98085 20.9269 10.0109C20.9803 10.0409 21.039 10.06 21.0998 10.0673C21.1605 10.0745 21.2221 10.0697 21.281 10.053C21.3398 10.0363 21.3949 10.0082 21.4429 9.97021C21.491 9.93221 21.5311 9.88508 21.561 9.83152C21.5909 9.77796 21.61 9.719 21.6172 9.65803L21.7936 7.78839C21.8071 7.64285 21.7876 7.49612 21.7365 7.35924C21.6854 7.22236 21.6041 7.09887 21.4986 6.99807C21.3931 6.89726 21.2663 6.82175 21.1276 6.7772C20.9889 6.73266 20.8419 6.72024 20.6978 6.74088V6.74088Z"
                    fill="currentColor"
                />
                <path
                    d="M28.6028 5.56714V24.9475L30.319 30.7143L32.0001 24.8883V5.62946L28.6028 5.56714Z"
                    fill="currentColor"
                />
                <path
                    d="M31.9586 3.84137C31.942 3.3267 31.6616 2.84267 31.2011 2.61468C30.9077 2.47059 30.5843 2.39868 30.2577 2.40491C29.9311 2.41115 29.6107 2.49533 29.3229 2.65051C28.8733 2.8946 28.611 3.3859 28.611 3.89694V4.60532H31.9839L31.9586 3.84137Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="32" height="32" fill="none" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function IconExternalLink(): JSX.Element {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path
                    d="M18.8614 14.5629C19.0932 14.8002 19.4101 14.9387 19.7441 14.9486C20.0782 14.9586 20.4029 14.8393 20.6489 14.6163L28.6771 7.33958C28.7082 7.31062 28.7494 7.29449 28.7922 7.29449C28.835 7.29449 28.8761 7.31062 28.9073 7.33958L30.2885 8.64768C30.3167 8.67449 30.3516 8.69343 30.3897 8.70254C30.4278 8.71165 30.4676 8.71062 30.5052 8.69954C30.5427 8.68846 30.5766 8.66774 30.6033 8.6395C30.63 8.61126 30.6487 8.57652 30.6573 8.53884C31.1031 6.61878 31.5493 4.69941 31.9958 2.78072C32.0025 2.7516 32.0019 2.72132 31.9941 2.69246C31.9863 2.66361 31.9715 2.63705 31.9511 2.61505C31.9306 2.59305 31.905 2.57627 31.8765 2.56614C31.848 2.55601 31.8175 2.55283 31.7875 2.55689L25.6781 3.48714C25.6461 3.49196 25.6161 3.5055 25.5914 3.52623C25.5668 3.54697 25.5485 3.57407 25.5386 3.60448C25.5288 3.6349 25.5278 3.66742 25.5356 3.69839C25.5435 3.72936 25.56 3.75754 25.5833 3.77976L26.9645 5.09608C26.981 5.11161 26.9941 5.13026 27.003 5.15091C27.012 5.17155 27.0166 5.19377 27.0166 5.21622C27.0166 5.23867 27.012 5.26088 27.003 5.28153C26.9941 5.30217 26.981 5.32082 26.9645 5.33635L18.9135 12.7681C18.7895 12.882 18.6896 13.019 18.6198 13.1712C18.5499 13.3234 18.5115 13.4878 18.5066 13.6548C18.5018 13.8218 18.5306 13.988 18.5916 14.1439C18.6525 14.2998 18.7442 14.4422 18.8614 14.5629Z"
                    fill="currentColor"
                />
                <path
                    d="M18.849 2H1.64375C0.73542 2 0 2.67356 0 3.50422V28.4989C0 29.3305 0.73542 30.0041 1.64375 30.0041H27.0729C27.9802 30.0041 28.7167 29.3305 28.7167 28.4989V16.9097C28.7167 16.4097 28.274 16.0041 27.7271 16.0041C27.1813 16.0041 26.7385 16.4148 26.7385 16.9097V27.8284C26.7376 27.8529 26.7318 27.8771 26.7214 27.8994C26.711 27.9217 26.6962 27.9418 26.6779 27.9585C26.6596 27.9751 26.6382 27.9881 26.6148 27.9966C26.5914 28.0051 26.5666 28.009 26.5417 28.0081H2.24688C2.19677 28.0097 2.14802 27.9918 2.11132 27.9581C2.07462 27.9244 2.05295 27.8778 2.05105 27.8284V4.09153C2.05186 4.06698 2.05755 4.04284 2.06783 4.02047C2.07811 3.9981 2.09278 3.97795 2.11096 3.96116C2.12915 3.94438 2.15051 3.9313 2.17383 3.92266C2.19715 3.91402 2.22198 3.90999 2.24688 3.91082H18.849C19.424 3.91082 19.8906 3.48471 19.8906 2.95797C19.8906 2.43124 19.424 2 18.849 2Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="32" height="32" fill="none" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function IconText({ style }: { style?: CSSProperties }): JSX.Element {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
            <g clipPath="url(#clip0)">
                <path d="M0 7.76876V3H21.2892V7.76876H13.5025V28.7966H7.78895V7.76876H0Z" fill="currentColor" />
                <path d="M0 7.76876V3H21.2892V7.76876H13.5025V28.7966H7.78895V7.76876H0Z" fill="currentColor" />
                <path
                    d="M22.8694 18.382H26.7333V18.3797H32.0001V16.3069H17.6038V18.3797H22.8694V18.382Z"
                    fill="currentColor"
                />
                <path
                    d="M22.8694 23.632H26.7333V23.6297H32.0001V21.5569H17.6038V23.6297H22.8694V23.632Z"
                    fill="currentColor"
                />
                <path
                    d="M22.8694 28.8825H26.7333V28.8802H32.0001V26.8074H17.6038V28.8802H22.8694V28.8825Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="1em" height="1em" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function IllustrationDanger({ style }: { style?: CSSProperties }): JSX.Element {
    return (
        <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 2.11495C8.33206 2.11495 2.1157 8.33095 2.1157 16C2.1157 23.6691 8.33206 29.8851 16 29.8851C23.6679 29.8851 29.8843 23.6691 29.8843 16C29.8843 8.33095 23.6679 2.11495 16 2.11495ZM0 16C0 7.16367 7.16282 0 16 0C24.8372 0 32 7.16367 32 16C32 24.8363 24.8372 32 16 32C7.16282 32 0 24.8363 0 16Z"
                fill="currentcolor"
            />
            <path d="M14 6H17.7025V20.3251H14V6ZM17.7025 22.6171V25.4821H14V22.6171H17.7025Z" fill="currentcolor" />
        </svg>
    )
}
