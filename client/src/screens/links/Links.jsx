import { Heading, Text } from "evergreen-ui";
import Button from "../../components/button/Button";
import { useSite } from "../../context/site.context";
import Analytics from "../../modules/analytics/Analytics";

export default function Links() {
  const {
    data: { links },
    create,
  } = useSite();

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
          {links.length > 1 ? (
            "links"
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
