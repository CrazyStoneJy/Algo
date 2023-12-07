type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

export default class EventEmitter {
    
    map = new Map<string, Callback[]>();

	subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.map.has(eventName)) {
            this.map.set(eventName, []);
        }
        this.map.get(eventName).push(callback);
		return {
			unsubscribe: () => {
                const callbacks = this.map.get(eventName);
                let index = 0;
                if ((index = callbacks.indexOf(callback)) >= 0) {
                    callbacks.splice(index, 1);
                }
			}
        };
	}

	emit(eventName: string, args: any[] = []): any[] {
		if (!this.map.has(eventName)) {
            return [];
        }
        const fns: Callback[] = this.map.get(eventName);
        return fns.map((fn: Callback) => fn.apply(this, args));
	}
}
