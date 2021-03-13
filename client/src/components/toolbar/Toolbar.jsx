import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  Link,
  Menu,
  Pane,
  Popover,
  Strong,
  Text,
  toaster,
} from "evergreen-ui";
import QRCode from "qrcode";
import Button from "components/button/Button";

import { copyToClipboard } from "services/utils";
import "./toolbar.scss";
import { QR_CODE_SIZE } from "services/constants";

export default function Toolbar({ username }) {
  const [qrCode, setQrCode] = useState();
  const url = useMemo(() => `${window.location.origin}/${username}`, [
    username,
  ]);

  const handleOnCopy = () => {
    copyToClipboard(url);
    toaster.success("Copied to Clipboard!");
  };

  const generateQR = async () => {
    try {
      const imageData = await QRCode.toDataURL(url, {
        width: QR_CODE_SIZE,
        height: QR_CODE_SIZE,
      });
      setQrCode(imageData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="toolbar">
      <Strong size={400} color="black">
        My Linkme:{" "}
      </Strong>
      <Link href={url} size={400} color="neutral" target="_blank">
        {url}
      </Link>
      <Popover
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item onClick={handleOnCopy}>Copy my Linkme URL</Menu.Item>
              <Menu.Item onClick={generateQR}>
                Download my Linkme QR Code
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Button>Share</Button>
      </Popover>

      {qrCode && (
        <Dialog
          isShown
          title="QR Code"
          hasFooter={false}
          width="auto"
          onCloseComplete={() => setQrCode(null)}
        >
          <div className="qrcode-dialog">
            <Strong>Barak</Strong>
            <Text>{url}</Text>
            <img src={qrCode} alt="" />
            <Button fullWidth height={40}>
              Save image
            </Button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
