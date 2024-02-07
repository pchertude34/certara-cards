import { Card, CardBody, CardHeader, CardFooter } from '../library/Card';
import { HexIcon } from '../HexIcon/HexIcon';

type ActionCardProps = {
  title: string;
  icon?: React.ReactNode;
  tag?: string;
  actionButtons?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode;
};

export function ActionCard(props: ActionCardProps) {
  const { title, icon, tag, actionButtons, children } = props;

  return (
    <Card tag={tag}>
      <CardHeader>
        {icon && <HexIcon icon={icon} classNames="mb-3" />}
        <h2 className="heading--md text-center">{title}</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter>
        <div className="button-group">{actionButtons}</div>
      </CardFooter>
    </Card>
  );
}
