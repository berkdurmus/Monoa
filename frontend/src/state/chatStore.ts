
import { BehaviorSubject } from 'rxjs';
import { Message } from '../model/message';

const messageSubject = new BehaviorSubject<Message[]>([]);

export const sendMessage = (content: string) => {
  const newMessage: Message = { content };
  messageSubject.next([...messageSubject.getValue(), newMessage]);
};

export const useMessages = (): Message[] => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    const subscription = messageSubject.subscribe(newMessages => {
      setMessages(newMessages);
    });
    return () => subscription.unsubscribe();
  }, []);

  return messages;
};
    