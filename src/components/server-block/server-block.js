import React, {useState} from 'react';
import './server-block.sass'
// images
import creaper from '../../media/images/creaper.png';
import Copy from '../../media/svg/copy-open.svg';
import CheckMark from '../../media/svg/check-mark-circle.svg';

const ServerBlock = ({isFooter = false}) => {

    const [isLinkCopied, setLinkCopied] = useState(false);

    const copyServerLink = () => {
        navigator.clipboard.writeText('gentle.squad-server.org');
        setLinkCopied(true);
        setTimeout(() => {
            setLinkCopied(false);
        }, 5000)
    }

    return (
        <article className={`server-block ${isFooter ? 'server-block_footer' : ''}`} onClick={() => copyServerLink()}>
            <img className="server-block__creaper" src={creaper} />
            <div className="server-block__info-container">
                <div className="server-block__link-container">
                    <span className="server-block__text-contact server-block__text-contact_site">
                        gentle.squad-server.org
                    </span>
                    <Copy className="server-block__to-link" />
                </div>
                <span className="server-block__text-contact server-block__text-contact_online">онлайн: 200</span>
            </div>
            <div className={`server-block__tooltip ${isLinkCopied ? 'server-block__tooltip_copied' : ''}`}>
                <CheckMark className="server-block__check"/>
                <span>Скопировано</span>
            </div>
        </article>
    )
}

export default ServerBlock;
