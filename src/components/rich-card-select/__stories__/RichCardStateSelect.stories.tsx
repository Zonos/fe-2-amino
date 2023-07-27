import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { LegacyButton } from 'src/components/button/LegacyButton';
import { Dialog } from 'src/components/dialog/Dialog';
import {
  type RichCardStateSelectProps,
  RichCardStateSelect,
} from 'src/components/rich-card-select/RichCardStateSelect';
import type { UnitedState } from 'src/types/UnitedStates';
import { unitedStates } from 'src/utils/unitedStates';

const RichCardStateSelectMeta: Meta = {
  component: RichCardStateSelect,
};

export default RichCardStateSelectMeta;

const Template: StoryFn<RichCardStateSelectProps> = ({
  states,
}: RichCardStateSelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<UnitedState | null>(null);

  return (
    <>
      <RichCardStateSelect
        onClick={state => {
          setSelectedState(state);
          setOpen(true);
        }}
        states={states}
      />

      <Dialog
        actions={
          <LegacyButton
            intent={selectedState?.highlighted ? 'danger' : 'primary'}
            onClick={() => {
              const foundState = states.find(
                state => state.code === selectedState?.code,
              );
              if (foundState) {
                foundState.highlighted = !foundState.highlighted;
              }
              setSelectedState(null);
              setOpen(false);
            }}
          >
            {selectedState?.highlighted ? 'Deselect' : 'Select'}
          </LegacyButton>
        }
        label={`${selectedState?.name} label!`}
        leftActions={
          <LegacyButton intent="outline" onClick={() => setOpen(false)}>
            Close
          </LegacyButton>
        }
        onClose={() => setOpen(false)}
        open={open}
        subtitle={`This is a subtitle for ${selectedState?.name}`}
        width={500}
      >
        This dialog is for {selectedState?.name}!
      </Dialog>
    </>
  );
};

const usStates = [...unitedStates];
const modifiedState = usStates.find(state => state.code === 'CA');
if (modifiedState) {
  modifiedState.highlighted = true;
}

export const BasicRichCardStateSelect = Template.bind({});
BasicRichCardStateSelect.args = { states: usStates };
BasicRichCardStateSelect.parameters = {};
