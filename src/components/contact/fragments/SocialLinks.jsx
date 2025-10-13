import { useState } from 'react';
import { Input, Dropdown } from 'antd';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { platformOptions } from '../../../utils/socialMedia';

function SocialLinks() {
    const [socialLinks, setSocialLinks] = useState([
        { id: 1, platform: 'facebook', link: '' },
        { id: 2, platform: 'linkedin', link: '' },
        { id: 3, platform: 'instagram', link: '' }
    ]);

    const getPlatformIcon = (platform) => {
        const option = platformOptions.find(opt => opt.value === platform);
        return option ? option.icon : platformOptions[0].icon;
    };

    const handleLinkChange = (id, value) => {
        setSocialLinks(socialLinks.map(link =>
            link.id === id ? { ...link, link: value } : link
        ));
    };

    const handlePlatformChange = (id, platform) => {
        setSocialLinks(socialLinks.map(link =>
            link.id === id ? { ...link, platform: platform } : link
        ));
    };

    const addSocialLink = () => {
        const newId = Math.max(...socialLinks.map(l => l.id), 0) + 1;
        setSocialLinks([...socialLinks, { id: newId, platform: 'facebook', link: '' }]);
    };

    const PlatformDropdown = ({ platform, onChange }) => {
        const items = platformOptions.map(option => ({
            key: option.value,
            label: (
                <div className="flex items-center justify-center w-full p-2">
                    {option.icon}
                </div>
            )
        }));

        return (
            <Dropdown
                menu={{
                    items,
                    onClick: ({ key }) => onChange(key)
                }}
                trigger={['click']}
                className="w-fit"
                overlayClassName="max-h-[40vh] overflow-y-auto "
            >
                <div className="flex items-center gap-1 cursor-pointer  rounded px-3 py-0">
                    <div className='border rounded-full p-2 border-gray-200'>
                        {getPlatformIcon(platform)}
                    </div>
                    <AiOutlineCaretDown className="w-[17.5px] text-darkGray " />
                </div>
            </Dropdown>
        );
    };

    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-darkGray mb-6">Social Media Links</h2>
            <div className="space-y-4">
                {socialLinks.map((social) => (
                    <div key={social.id} className="flex  gap-3 items-start">
                        <div className="flex flex-col items-start border-r px-2 border-gray-100">
                            <label className="block text-sm font-medium text-nowrap text-darkGray mb-2">
                                Social Media
                            </label>
                            <PlatformDropdown
                                platform={social.platform}
                                onChange={(platform) => handlePlatformChange(social.id, platform)}
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-sm text- font-medium text-darkGray mb-2">
                                Link
                            </label>
                            <Input
                                value={social.link}
                                onChange={(e) => handleLinkChange(social.id, e.target.value)}
                                placeholder="Enter valid link to your account"
                                className="text-sm"
                            />
                        </div>
                    </div>
                ))}
                <div className='flex w-full justify-center'>

                    <button
                        onClick={addSocialLink}
                        className="flex items-center gap-2 text-primary hover:text-blue-600 font-medium text-sm mt-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add a link
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;