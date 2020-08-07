import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Text, TextStyle } from "../Text";
import { Depth, Surface } from "../../primitives";
import { MenuItem, Menu } from "../Menu";
import { DropdownAnimation } from "../../animations";

const DropdownContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(${AminoTheme.spaceHalf});
    top: 41px;
    pointer-events: none;
    color: var(${AminoTheme.textColor});
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
  }

  &:hover svg {
    opacity: 0.6;
  }

  & > div {
    width: 100%;
  }

  button {
    z-index: 88;
  }

  span {
    margin-top: var(${AminoTheme.spaceQuarter});
    display: block;
  }

  //TODO: I don't like replicating this code...
  input {
    height: 38px;
    box-sizing: border-box;
    position: relative;
    outline: none;
    border: 1px solid var(${AminoTheme.borderColor});
    padding: 0 var(${AminoTheme.spaceHalf});
    transition: var(${AminoTheme.transition});
    box-shadow: var(${AminoTheme.shadowSmall});
    width: 100%;
    border-radius: var(${AminoTheme.radius});
    background: var(${AminoTheme.inputBackground});

    ::placeholder {
      color: var(${AminoTheme.textColor});
      opacity: 0.3;
    }

    &:focus {
      outline: none;
      border: var(${AminoTheme.borderBlue});
      box-shadow: var(${AminoTheme.glowBlue});
    }
  }
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: var(${AminoTheme.border});
  z-index: 10;
  position: absolute;
  padding: var(${AminoTheme.radius}) 0;
  margin-top: var(${AminoTheme.spaceQuarter});
  right: 0;
  min-width: 100%;
  width: max-content;
  outline: none !important;
  max-height: 350px;
  overflow-y: auto;

  ul {
    outline: none !important;
  }
`;

const DropdownItem = styled(MenuItem)<any>`
  background: ${p =>
    p.isSelected ? `var(${AminoTheme.hoverColor})` : `var(${AminoTheme.surfaceColor})`};
  color: ${p =>
    p.isSelected ? `var(${AminoTheme.primary})` : `var(${AminoTheme.textColor})`};
  font-weight: ${p => (p.isSelected ? "500" : "normal")};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 6.5px;
    top: 6.5px;
    z-index: 999;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  margin-right: var(${AminoTheme.spaceHalf});
`;

type Props = {
  items: Array<any>;
  label: string;
  helpText?: string;
  onChange: (newValue: string) => any;
  value: string;
  placeholder: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: any;
  tabIndex?: number;
};

// TODO: use onSelectedItemChange ?

export const Combobox: React.FC<Props> = ({
  items,
  label,
  onChange,
  helpText,
  value,
  placeholder,
  itemLabelPath,
  itemValuePath,
  labelFormatFunction,
  tabIndex
}) => {
  const [selectItems, setSelectItems] = useState([] as any);

  useEffect(() => {
    setSelectItems(
      items.map(item => {
        const label = itemLabelPath ? item[itemLabelPath] : item.label;

        if (labelFormatFunction) {
          return labelFormatFunction(label);
        } else {
          return label;
        }
      })
    );
  }, [items]);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem
  } = useCombobox({
    items: selectItems,
    onInputValueChange: ({ inputValue }: any) => {
      const foundItems = items
        .map(item => {
          const label = itemLabelPath ? item[itemLabelPath] : item.label;

          if (labelFormatFunction) {
            return labelFormatFunction(label);
          } else {
            return label;
          }
        })
        .filter(item => {
          return item.toLowerCase().startsWith(inputValue.toLowerCase());
        });

      if (foundItems.length === 1) {
        const item = items.find(x =>
          itemLabelPath
            ? x[itemLabelPath] === inputValue
            : x.label === inputValue
        );

        if (item) {
          onChange(itemValuePath ? item[itemValuePath] : item.value);
        }
      }

      setSelectItems(foundItems);
    }
  } as any);

  const renderIcon = (itemLabel: string) => {
    const item = items.find(x =>
      itemLabelPath ? x[itemLabelPath] === itemLabel : x.label === itemLabel
    );

    if (item && item.iconComponent) {
      return item.iconComponent;
    } else if (item && item.icon) {
      return <Icon src={item.icon} />;
    } else {
      return null;
    }
  };

  const selectedHasIcon = () =>
    Boolean(
      items.find(x =>
        itemLabelPath
          ? x[itemLabelPath] === selectedItem
          : x.label === selectedItem
      ).icon
    );

  useEffect(() => {
    if (selectedItem && selectItems.length) {
      const item = items.find(i =>
        itemLabelPath
          ? i[itemLabelPath] === selectedItem
          : i.label === selectedItem
      );

      onChange(itemValuePath ? item[itemValuePath] : item.value);
    }
  }, [selectedItem]);

  return (
    <DropdownContainer className="amino-input-wrapper">
      <Text {...getLabelProps()} style={TextStyle.InputLabel}>
        {label}
      </Text>
      <Wrapper {...getComboboxProps()}>
        {selectedItem && renderIcon(selectedItem as string)}
        <input
          tabIndex={tabIndex && tabIndex}
          style={{
            paddingLeft: selectedItem && selectedHasIcon() ? "40px" : ""
          }}
          placeholder={placeholder}
          {...getInputProps()}
        />
      </Wrapper>

      {/*TODO: add dropdown button indicator*/}
      {/*<button {...getToggleButtonProps()} aria-label="toggle menu">*/}
      {/*  <DropdownIcon />*/}
      {/*</button>*/}

      {isOpen && (
        <AnimatedSurface dense depth={Depth.depth16}>
          <Menu {...getMenuProps()}>
            {selectItems.map((item: any, index: number) => (
              <DropdownItem
                isSelected={selectedItem === item}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {renderIcon(item)}
                {item}
              </DropdownItem>
            ))}
          </Menu>
        </AnimatedSurface>
      )}

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}

      <div tabIndex={0} />
    </DropdownContainer>
  );
};
