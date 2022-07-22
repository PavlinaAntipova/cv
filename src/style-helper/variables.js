const size = {
    mobileS: '320px',
    mobileSMax: '424px',
    mobileL: '425px',
    mobileMax: '767px',
    tablet: '768px',
    tabletMax: '1023px',
    desktopMin: '1200px',
};

export const theme = {
    color: {
    accentColorFirst: '#C40F3A',
    accentColorSecond: '#A7C958',
    accentColorThird: '#580054',
    lighterColor: '#747474'
    },
    device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileSMax: `(max-width: ${size.mobileSMax})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobileMax: `(max-width: ${size.mobileMax})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletMax: `(max-width: ${size.tabletMax})`,
    desktop: `(min-width: ${size.desktopMin})`,
    }
    
}

