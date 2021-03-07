import { Heading, Text } from "evergreen-ui";
import Button from "../../components/button/Button";
import useLinks from "./useLinks";
import Analytics from "../../components/analytics/Analytics";
import Link from "../../components/link/Links";

export default function Links() {
  const { links, create } = useLinks();

  return (
    <div className="settings">
      <Analytics />
      <div className="page__container">
        <Button
          fullWidth
          onClick={create}
          appearance="primary"
          height={45}
          marginTop={50}
        >
          Add New Link
        </Button>
        <div className="links">
          {links.length > 0 ? (
            links.map((link) => <Link key={link._id} {...link} />)
          ) : (
            <div className="link__empty">
              You don't have any links to display.
              <br />
              Click the button above to add one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
