import {useState} from 'react';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {Text} from '@h2/new/Text';

const Accordion = ({data}) => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleToggle = (index) => {
    // Toggle functionality to open or close panels
    setOpenPanel(openPanel === index ? null : index);
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <Disclosure
          key={item.id}
          open={openPanel === index}
          onChange={() => handleToggle(index)}
        >
          {({open}) => (
            <>
              <DisclosureButton className="flex items-center justify-between w-full h-12 border-t border-primary/10">
                <Text>{item.title}</Text>
                <span
                  className={`${
                    open ? `rotate-0` : `rotate-45`
                  } transition-transform`}
                >
                  &times;
                </span>
              </DisclosureButton>
              <DisclosurePanel className="pb-4">
                <Text as="p" align="left">
                  {item.content}
                </Text>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
