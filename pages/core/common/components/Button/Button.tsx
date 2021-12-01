import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

const disabled = {
  opacity: 0.4,
  cursor: 'not-allowed',
  boxShaow: 'none',
};

const variantSolid = (props: any): any => {
  const { colorScheme: c, isDisabled } = props;

  return {
    bg: `${c}.900`,
    color: 'gray.300',
    _hover: isDisabled ? { bg: `${c}.600` } : { bg: `${c}.700` },
    _active: { bg: `${c}.500` },
    _disabled: disabled,
  };
};

const variantOutline = (props: any): any => {
  const { colorScheme: c, isDisabled } = props;

  // eslint-disable-next-line
  const { bg, color, _hover, _active, _disabled } = variantSolid(
    props
  ) as Record<string, unknown>;
  const hover = _hover as any;
  const active = _active as any;

  return {
    border: '2px solid',
    color: bg,
    borderColor: c === 'gray' ? bg : 'currentColor',
    bg: 'transparent',
    _hover:
      color === 'gray'
        ? hover
        : isDisabled
        ? {
            bg: hover.bg,
            color: hover.bg,
            borderColor: hover.bg,
            _disabled: hover._disabled
              ? {
                  bg: 'transparent',
                  color: (_disabled as Record<string, unknown>)?.bg,
                  borderColor: (_disabled as Record<string, unknown>)?.bg,
                }
              : {},
          }
        : {},
    _active:
      color === 'gray'
        ? active
        : {
            bg: active.bg,
            color,
            borderColor: active.bg,
            _disabled: active._disabled
              ? {
                  bg: active._disabled.bg,
                }
              : {},
          },
    _disabled: {
      ...(_disabled as Record<string, unknown>),
      color: (_disabled as Record<string, unknown>)?.bg,
      bg: 'transparent',
    },
  };
};

export const ButtonConfig = {
  baseStyle: {
    flexShrink: 0,
    borderTopLeftRadius: 'base',
    borderTopRightRadius: 'base',
    borderBottomRightRadius: '2xl',
    borderBottomLeftRadius: 'base',
    textTransform: 'uppercase',
    letterSpacing: 'widest',
    fontWeight: 'bold',
    _hover: {
      _disabled: {
        background: '',
      },
    },
  } as Record<string, unknown>,

  variants: {
    solid: variantSolid as any,
    outline: variantOutline as any,
  },

  sizes: {
    xl: {
      h: 12,
      minW: 64,
      fontSize: 'sm',
      px: 6,
    },
    lg: {
      h: 10,
      minW: 58,
      fontSize: 'sm',
      px: 4,
    },
    md: {
      h: 8,
      minW: 40,
      fontSize: 'sm',
      px: 3,
    },
    sm: {
      h: 6,
      minW: 22,
      fontSize: 'xs',
      px: 2,
    },
  },
  defaultProps: {
    colorScheme: 'darkBlue',
    size: 'sm',
  },
};

export type { ButtonProps };
export const Button = ChakraButton;
