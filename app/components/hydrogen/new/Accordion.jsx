import {useState} from 'react';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {Text} from '@h2/Text';

const Accordion = ({data}) => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleToggle = (index) => {
    if (openPanel === index) {
      setOpenPanel(null);
    } else {
      setOpenPanel(index);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <Disclosure
          key={item.id}
          open={openPanel === index}
          onChange={() => handleToggle(index)}
        >
          {({open}) => (
            <>
              <DisclosureButton className="h-12 border-t border-primary/10 flex justify-between items-center w-full">
                <Text>{item.title}</Text>
                <span
                  className={`${
                    open ? `rotate-0` : `rotate-45`
                  } transition-transform`}
                >
                  &times;
                </span>
              </DisclosureButton>
              <DisclosurePanel>{item.content}</DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
