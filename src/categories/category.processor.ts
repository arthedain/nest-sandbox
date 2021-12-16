import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('category')
export class CategoryProcessor {
  @Process('test')
  async transcode(job: Job<unknown>) {
    console.log(job.data);
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
