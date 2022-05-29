import React from 'react';
import './discord-block.sass';
// images
import Discord from '../../media/svg/discord-icon.svg';
import OpenLink from '../../media/svg/open-discord.svg';

const DiscordBlock = ({isFooter = false}) => {
    return (
        <article className={`discord-block ${isFooter ? 'discord-block_footer' : ''}`}>
            <div className="discord-block__info-container">
                <div className="discord-block__link-container">
                    <OpenLink className="discord-block__to-link" />
                    <span className="discord-block__text-contact">Соощество в Discord</span>
                </div>
                <span className="discord-block__text-contact discord-block__text-contact_online">онлайн: 221</span>
            </div>
            <div className="discord-block__discord-icon-container">
                <Discord className="discord-block__discord-icon" />
            </div>
        </article>
    )
};

export default DiscordBlock;
